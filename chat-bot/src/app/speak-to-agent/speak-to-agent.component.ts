import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
@Component({
  selector: 'app-speak-to-agent',
  templateUrl: './speak-to-agent.component.html',
  styleUrls: ['./speak-to-agent.component.css']
})
export class SpeakToAgentComponent implements OnInit {
  sessionId = null;
  constructor(private data: DataService, private http: HttpClient) {
    setInterval(() => {
      this.getSessionIdMessages(this.sessionId).subscribe((data: any) => {
        console.log("messages", data)
        // this.messagesAndResponses.push({
        //   data: data.message,
        //   style: "speech-bubble",
        //   image: selectedOption.nodeimage
        //     ? "data:image/jpeg;base64," + selectedOption.nodeimage
        //     : null
        // });
      })

    }, 1000);

  }
  getSessionIdMessages(sessionId: string) {
    return this.http.get("http://41.86.98.151:8080/getChat?sessionId=" + sessionId);
  }

  ngOnInit() {
    this.data.sessionId.subscribe((message: any) => {
      this.sessionId = message;
    })
  }

}
