import { Component } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Options } from "./app.options";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "chat-bot";
  messagesAndResponses = [];
  btns = [];
  allOptionsDisabled = false;
  constructor(private http: HttpClient) {
    this.Reset(false);
  }
  Reset(status: boolean) {
    this.messagesAndResponses = [];
    this.btns = [];
    if (status) {
      window.location.href = "/";
      this.ShowFirstOptions();
      this.allOptionsDisabled = false;
    }
  }
  getFirstOptions(): Observable<HttpResponse<Options>> {
    return this.http.get<Options>("http://41.86.98.151:8080/tree?name=test", {
      observe: "response"
    });
  }

  getOptions(nodeId: string): Observable<HttpResponse<Options>> {
    return this.http.get<Options>(
      "http://41.86.98.151:8080/node?nodeid=" + nodeId,
      { observe: "response" }
    );
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

        data.body.node.forEach((singleOption: any) => {
          this.messagesAndResponses.push({
            ...singleOption,
            isDisabled: false,
            data: singleOption.option,
            style: "option-bubble",
            number: data.body.node.indexOf(singleOption) + 1,
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
    this.messagesAndResponses.push({
      data: selectedOption.option,
      style: "speech-bubble-response",
      image: selectedOption.nodeimage
        ? "data:image/jpeg;base64," + selectedOption.nodeimage
        : null
    });
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
              isDisabled: false,
              data: singleOption.option,
              style: "option-bubble",
              number: data.body.node.indexOf(singleOption) + 1,
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
      }
    }
  }
  disableAllOptions() {
    this.messagesAndResponses.forEach(singleResponse => {
      singleResponse.isDisabled = true;
    });
    this.allOptionsDisabled = true;
  }
}

