import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
@Component({
  selector: "app-speak-to-agent",
  templateUrl: "./speak-to-agent.component.html",
  styleUrls: ["./speak-to-agent.component.css"]
})
export class SpeakToAgentComponent implements OnInit {
  sessionId = null;
  messages = [];
  title = "speaking to agent";
  text = "";
  constructor(private data: DataService, private http: HttpClient) {
    setTimeout(() => {
      this.getMessages();
    }, 1000);
    setInterval(() => {
      this.getMessages();
    }, 3000);
  }

  sendMessage(event) {
    console.log("event", event)
    if (event) {
      if (event.keyCode === 13 || event.code === "Enter") {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          left: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      },6);
        console.log("works")
        const value = event.target.value || event.path[0].value;
        console.log("the event value", value);
        this.text = value;
        this.messages.push({
          message: value,
          style: "speech-bubble-response"
        });
        this.sendMessageToApi({ data: value, type: "User" }).subscribe();
        event.path[0].value = "";
      } else {
        this.text = event.path[0].value;
      }
    } else {
      if (this.text.length > 0) {
        this.messages.push({
          message: this.text,
          style: "speech-bubble-response"
        });
        this.sendMessageToApi({ data: this.text, type: "User" }).subscribe();
      }
    }
    if (this.messages) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          left: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      }, 600);
    }
    this.getMessages();
  }
  sendMessageToApi(message: any) {
    return this.http.get("http://41.86.98.151:8080/addMessage?type=" + message.type + "&message=" + message.data + "&sessionId=" + this.sessionId + "&messageImage=" + message.nodeimage);
  }
  getMessages() {
    this.getSessionIdMessages(this.sessionId).subscribe((data: any) => {
      data.message.forEach(element => {
        if (element.type === "User") {
          element.style = "speech-bubble-response";
        } else if (element.type === "bot") {
          element.style = "speech-bubble";
        } else {
          element.style = "option-bubble"
        }
        if (element.messageImage) {
          element.image = element.messageImage;
          console.log('element.messageImage', element.image)
        }
      });
      if (this.messages.length !== data.message.length) {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: document.documentElement.scrollHeight,
            behavior: "smooth"
          });
        }, 600);
      }
      this.messages = data.message;
    });
  }
  Reset(status: boolean) {
    this.messages = [];
    if (status) {
      window.location.href = "/";
    }
  }
  getSessionIdMessages(sessionId: string) {
    return this.http.get(
      "http://41.86.98.151:8080/getChat?sessionId=" + sessionId
    );
  }

  ngOnInit() {
    this.data.sessionId.subscribe((id: any) => {
      this.sessionId = id;
    });
  }
}
