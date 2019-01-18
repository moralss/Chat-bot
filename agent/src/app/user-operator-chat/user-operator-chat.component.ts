import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
@Component({
  selector: 'app-user-operator-chat',
  templateUrl: './user-operator-chat.component.html',
  styleUrls: ['./user-operator-chat.component.css']
})
export class UserOperatorChatComponent implements OnInit {
  messagesAndResponses = [];
  userSessionId = '';
  text = '';
  constructor(private http: HttpClient, private data: DataService) {
    setTimeout(() => {
      this.getData();
    }, 1000);
    setInterval(() => {
      this.getNewMessages(this.userSessionId);
    }, 3000);
  }
  sendMessage(event) {
    if (event) {
      if (event.keyCode === 13) {
        const value = event.path[0].value;
        this.messagesAndResponses.push({
          message: value,
          style: "agent-speech-bubble",
          orderId: this.messagesAndResponses.length + 1
        })
        this.sendMessageToApi({ data: value, type: "agent", orderId: this.messagesAndResponses.length + 1 }).subscribe();
        event.path[0].value = "";
      } else {
        this.text = event.path[0].value;
      }
    } else {
      if (this.text.length > 0) {
        this.messagesAndResponses.push({
          message: this.text,
          style: "agent-speech-bubble",
          orderId: this.messagesAndResponses.length + 1
        })
        this.sendMessageToApi({ data: this.text, type: "agent", orderId: this.messagesAndResponses.length + 1 }).subscribe();
      }
    }
    this.getNewMessages(this.userSessionId);
  }
  getData() {
    this.data.currentMessage.subscribe((message: any) => {
      this.userSessionId = message.sessionId;
      message.messages.forEach(element => {
        if (element.type === "bot") {
          element.style = "speech-bubble-response";
        } else if (element.type === "User") {
          element.style = "speech-bubble";
        } else {
          element.style = "agent-speech-bubble";
        }
        element.orderId = +element.orderId;
      });
      message.messages.sort((a, b) => {
        if (a.orderId < b.orderId) return -1;
        if (a.orderId > b.orderId) return 1;
        return 0;
      })
      this.messagesAndResponses = message.messages;
    })
  }
  sendMessageToApi(message: any) {
    return this.http.get("http://41.86.98.151:8080/addMessage?type=" + message.type + "&message=" + message.data + "&sessionId=" + this.userSessionId);
  }
  closeSession() {
    return this.http.get("http://41.86.98.151:8080/removeSession?sessionId=" + this.userSessionId);
  }
  getSessionIdMessages(sessionId: string) {
    return this.http.get("http://41.86.98.151:8080/getChat?sessionId=" + sessionId);
  }
  getNewMessages(sessionId: string) {
    this.getSessionIdMessages(sessionId).subscribe((data: any) => {
      data.message.forEach(element => {
        if (element.type === "bot") {
          element.style = "speech-bubble-response";
        } else if (element.type === "User") {
          element.style = "speech-bubble";
        } else {
          element.style = "agent-speech-bubble";
        }
        element.orderId = +element.orderId;
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
      data.message.sort((a, b) => {
        if (a.orderId < b.orderId) return -1;
        if (a.orderId > b.orderId) return 1;
        return 0;
      })
      this.messagesAndResponses = data.message;
      this.data.changeMessage({ sessionId: this.userSessionId, messages: data.message });
    })
  }
  endChat() {
    this.closeSession().subscribe();
  }
  ngOnInit(): any {
  }
}