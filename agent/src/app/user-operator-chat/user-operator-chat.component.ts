import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-user-operator-chat',
  templateUrl: './user-operator-chat.component.html',
  styleUrls: ['./user-operator-chat.component.css']
})
export class UserOperatorChatComponent implements OnInit {
  messagesAndResponses = [];
  userSessionId = '';
  constructor(private data: DataService) {
    setTimeout(() => {
      this.getData()
    }, 1000);
  }
  getData() {
    this.data.currentMessage.subscribe((message: any) => {
      this.userSessionId = message[0].sessionId;
      message[0].messages.forEach(element => {
        if (element.type === "bot") {
          element.style = "speech-bubble";
        } else if (element.type === "user") {
          element.style = "speech-bubble-response";
        }
        this.messagesAndResponses.push(element)
      });
      console.log("message", message);
    })
  }

  ngOnInit(): any {
  }
}
