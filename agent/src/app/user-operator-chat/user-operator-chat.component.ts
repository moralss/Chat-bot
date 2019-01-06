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
    setTimeout(() => {
      this.getData();
    }, 4000);
  }
  sendMessage(event) {
    if (event) {
      if (event.keyCode === 13) {
        const value = event.path[0].value;
        this.messagesAndResponses.push({
          message: value,
          style: "agent-speech-bubble"
        })
        this.sendMessageToApi({ data: value, type: "agent" }).subscribe();
        event.path[0].value = "";
      } else {
        this.text = event.path[0].value;
      }
    } else {
      if (this.text.length > 0) {
        this.messagesAndResponses.push({
          message: this.text,
          style: "agent-speech-bubble"
        })
        this.sendMessageToApi({ data: this.text, type: "agent" }).subscribe();
      }
    }
  }
  getData() {
    this.data.currentMessage.subscribe((message: any) => {
      this.userSessionId = message[0].sessionId;
      message[0].messages.forEach(element => {
        if (element.type === "bot") {
          element.style = "speech-bubble";
        } else if (element.type === "User") {
          element.style = "speech-bubble-response";
        }
        this.messagesAndResponses.push(element)
      });
      console.log("message", message);
    })
  }
  sendMessageToApi(message: any) {
    return this.http.get("http://41.86.98.151:8080/addMessage?type=" + message.type + "&message=" + message.data + "&sessionId=" + this.userSessionId);
  }
  closeSession() {
    return this.http.get("http://41.86.98.151:8080/removeSession?sessionId=" + this.userSessionId);
  }
  endChat() {
    this.closeSession().subscribe();
  }
  ngOnInit(): any {
  }
}