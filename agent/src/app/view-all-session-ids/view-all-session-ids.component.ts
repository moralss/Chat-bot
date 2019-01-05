import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Sessions } from "./view-all-session-ids.sessions"
import { Observable } from "rxjs";
import { DataService } from "../data.service";


@Component({
  selector: 'app-view-all-session-ids',
  templateUrl: './view-all-session-ids.component.html',
  styleUrls: ['./view-all-session-ids.component.css']
})

export class ViewAllSessionIdsComponent implements OnInit {
  title = "Chat bot";
  allAvailableSessions = [];
  sessionIdMessages = [];
  message = []
  constructor(private http: HttpClient, private data: DataService) {
    this.ShowSessionIds();
  }
  getSessionIds(): Observable<HttpResponse<Sessions>> {
    return this.http.get<Sessions>("http://41.86.98.151:8080/getChatSessions", {
      observe: "response"
    });
  }

  ShowSessionIds() {
    this.getSessionIds().subscribe(
      (data: any) => {
        data.body.map(element => {
          this.allAvailableSessions.push(element);
        });
      }
    )
  }

  getSessionIdMessages(sessionId: string) {
    return this.http.get("http://41.86.98.151:8080/getChat?sessionId=" + sessionId);
  }
  selectedSessionId(sessionId: string) {
      this.getSessionIdMessages(sessionId).subscribe((data: any) => {
        this.sessionIdMessages.push({ sessionId: sessionId, messages: data.message });
        this.data.changeMessage(this.sessionIdMessages);
      })
  }
  ngOnInit() {
    this.data.changeMessage(this.sessionIdMessages);
    this.data.currentMessage.subscribe((message: any) => console.log("data in view", message))
  }

}
