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
  userBotChats = [];
  messages = [];
  title = "speaking to agent";
  text = "";
  constructor(private data: DataService, private http: HttpClient) {
    setTimeout(() => {
      this.getMessages(true);
    }, 1000);
    setInterval(() => {
      this.getMessages(false);
    }, 4000);
  }

  sendMessage(event) {
    if (event) {
      if (event.keyCode === 13) {
        const value = event.path[0].value;
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
    this.getMessages(false);
  }
  sendMessageToApi(message: any) {
    return this.http.get(
      "http://41.86.98.151:8080/addMessage?type=" +
        message.type +
        "&message=" +
        message.data +
        "&sessionId=" +
        this.sessionId
    );
  }
  getMessages(onLoad: boolean) {
    this.getSessionIdMessages(this.sessionId).subscribe((data: any) => {
      data.message.forEach(element => {
        if (element.type === "User") {
          element.style = "speech-bubble-response";
        } else {
          element.style = "speech-bubble";
        }
      });
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
    this.data.userBotMessages.subscribe((messages: any) => {
      this.userBotChats = messages;
    });
    this.data.userAgentMessages.subscribe((messages: any) => {
      this.messages = messages;
    });
  }
}
