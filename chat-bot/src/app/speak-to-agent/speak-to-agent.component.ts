import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-speak-to-agent",
  templateUrl: "./speak-to-agent.component.html",
  styleUrls: ["./speak-to-agent.component.css"]
})

export class SpeakToAgentComponent implements OnInit {
  sessionId = null;
  messages = [];
  userBotMessages = [];
  title = "speaking to agent";
  text = "";
  constructor(private data: DataService, private http: HttpClient, private sanitizer: DomSanitizer) {
    setTimeout(() => {
      this.getMessages();
    }, 1000);
    setInterval(() => {
      this.getMessages();
    }, 3000);
  }

  sendMessage(event) {
    if (event) {
      if (event.keyCode === 13 || event.code === "Enter") {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: document.documentElement.scrollHeight,
            behavior: "smooth"
          });
        }, 6);
        const value = event.target.value || event.path[0].value;
        this.text = value;
        this.messages.push({
          message: value,
          style: "speech-bubble-response",
          orderId: this.messages.length + 1
        });
        this.sendMessageToApi({ data: value, type: "User", orderId: this.messages.length + 1 }).subscribe();
        event.path[0].value = "";
      } else {
        this.text = event.path[0].value;
      }
    } else {
      if (this.text.length > 0) {
        this.messages.push({
          message: this.text,
          style: "speech-bubble-response",
          orderId: this.messages.length + 1
        });
        this.sendMessageToApi({ data: this.text, type: "User", orderId: this.messages.length + 1 }).subscribe();
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
    return this.http.get("http://41.86.98.151:8080/addMessage?type=" + message.type + "&message=" + message.data + "&sessionId=" + this.sessionId + "&messageImage=" + message.nodeimage + "&orderId=" + `${message.orderId}`);
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
        element.orderId = +element.orderId;
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
      data.message.sort((a, b) => {
        if (a.orderId < b.orderId) return -1;
        if (a.orderId > b.orderId) return 1;
        return 0;
      })
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
    this.data.userBotMessages.subscribe((data: any) => {
      this.userBotMessages = data.message;
    })
  }
}
