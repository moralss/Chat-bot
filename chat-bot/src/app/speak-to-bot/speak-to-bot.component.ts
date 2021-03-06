import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Options } from "../app.options";
import { Observable } from "rxjs";
import { DataService } from "../data.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-speak-to-bot",
  templateUrl: "./speak-to-bot.component.html",
  styleUrls: ["./speak-to-bot.component.css"]
})
export class SpeakToBotComponent implements OnInit {
  apiAddress = environment.apiAddress;
  title: string = "SIABOT";
  messagesAndResponses = [];
  messagesToAgent = [];
  btns = [];
  allOptionsDisabled = false;
  sessionId = null;
  constructor(private http: HttpClient, private data: DataService) {
    this.Reset(false);
  }
  Reset(status: boolean) {
    this.messagesAndResponses = [];
    this.btns = [];
    if (status) {
      this.allOptionsDisabled = false;
    }
    this.ShowFirstOptions();
  }
  getFirstOptions(): Observable<HttpResponse<Options>> {
    return this.http.get<Options>(this.apiAddress + "tree?name=test", {
      observe: "response"
    });
  }

  getOptions(nodeId: string): Observable<HttpResponse<Options>> {
    return this.http.get<Options>(this.apiAddress + "node?nodeid=" + nodeId, {
      observe: "response"
    });
  }

  ShowFirstOptions() {
    this.getFirstOptions().subscribe(
      data => {
        this.messagesAndResponses.push({
          data: data.body.text,
          style: "speech-bubble",
          image: data.body.nodeimage
            ? "data:image/jpeg;base64," + data.body.nodeimage
            : null
        });
        this.sessionId = data.body.nodeid;
        this.data.setSessionId(this.sessionId);
        data.body.node.forEach((singleOption: any) => {
          this.messagesAndResponses.push({
            ...singleOption,
            number: data.body.node.indexOf(singleOption) + 1,
            isDisabled: false,
            data: singleOption.option,
            style: "option-bubble",
            image: singleOption.nodeimage
              ? "data:image/jpeg;base64," + singleOption.nodeimage
              : null
          });
        });
        this.btns = data.body.node;
      },
      err => console.error(err)
    );
    return this.btns;
  }

  showOptions(selectedOption) {
    var userMessage = {
      data: selectedOption.option,
      style: "human-response sb12",
      number: 1,
      img: true,
      image: selectedOption.nodeimage
        ? "data:image/jpeg;base64," + selectedOption.nodeimage
        : null
    };
    console.log("user Message", userMessage)
    this.messagesAndResponses.push(userMessage);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
    this.getOptions(selectedOption.nodeid).subscribe(
      data => {
        if (data.body.text) {
          this.btns = data.body.node;
          this.messagesAndResponses.push({
            data: data.body.text,
            style: "speech-bubble",
            image: selectedOption.nodeimage
              ? "data:image/jpeg;base64," + selectedOption.nodeimage
              : null
          });
          this.messagesAndResponses.forEach(singleResponse => {
            if (!singleResponse.isDisabled) {
              singleResponse.isDisabled = true;
            }
          });
          data.body.node.forEach((singleOption: any) => {
            this.messagesAndResponses.push({
              ...singleOption,
              number: data.body.node.indexOf(singleOption) + 1,
              isDisabled: false,
              data: singleOption.option,
              style: "option-bubble",
              image: singleOption.nodeimage
                ? "data:image/jpeg;base64," + singleOption.nodeimage
                : null
            });
          });
          setTimeout(() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              left: document.documentElement.scrollHeight,
              behavior: "smooth"
            });
          }, 500);
        }
      },
      err => console.error(err)
    );
    return this.btns;
  }
  sendMessage(event: any) {
    if (event.keyCode === 13) {
      const value = event.path[0].value;
      if (!this.allOptionsDisabled) {
        this.showOptions(this.btns[value - 1]);
      } else {
        const userMessage = {
          data: value,
          style: "speech-bubble-response"
        };

        this.messagesToAgent.push(userMessage);
        this.data.setUserAgentMessages(this.messagesToAgent);
        this.sendMessageToApi({ ...userMessage }).subscribe();
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          left: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      }
    }
  }

  sendMessageToApi(message: any) {
    if (message.nodeimage) {
      return this.http.get(
        this.apiAddress +
        "addMessage?type=" +
        message.type +
        "&message=" +
        message.data +
        "&sessionId=" +
        this.sessionId +
        "&messageImage=" +
        message.nodeimage +
        "&orderId=" +
        `${message.orderId}`
      );
    } else {
      return this.http.get(
        this.apiAddress +
        "addMessage?type=" +
        message.type +
        "&message=" +
        message.data +
        "&sessionId=" +
        this.sessionId +
        "&orderId=" +
        `${message.orderId}`
      );
    }
  }
  setSession() {
    return this.http.get(
      this.apiAddress + "markAgentSession?sessionId=" + this.sessionId
    );
  }
  disableAllOptions() {
    this.setSession().subscribe();
    this.messagesAndResponses.forEach(singleResponse => {
      singleResponse.isDisabled = true;
      if (singleResponse.style === "speech-bubble") {
        singleResponse.type = "bot";
        singleResponse.nodeimage = singleResponse.image;
      } else if (singleResponse.style === "human-response sb12") {
        singleResponse.nodeimage = singleResponse.image;
        singleResponse.type = "User";
      } else {
        singleResponse.type = "option";
        singleResponse.nodeimage = singleResponse.nodeimage
          ? "data:image/jpeg;base64," + singleResponse.nodeimage
          : null;
      }
      singleResponse.orderId =
        this.messagesAndResponses.indexOf(singleResponse) + 1;
      if (singleResponse.type) {
        this.sendMessageToApi(singleResponse).subscribe();
      }
    });

    this.data.setUserBotMessages({
      sessionId: this.sessionId,
      message: this.messagesAndResponses
    });
    sessionStorage.setItem("sessionId", this.sessionId);
    this.allOptionsDisabled = true;
  }
  ngOnInit() { }
}
