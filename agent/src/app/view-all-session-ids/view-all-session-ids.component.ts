import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Sessions } from "./view-all-session-ids.sessions"
import { Observable } from "rxjs";
@Component({
  selector: 'app-view-all-session-ids',
  templateUrl: './view-all-session-ids.component.html',
  styleUrls: ['./view-all-session-ids.component.css']
})
export class ViewAllSessionIdsComponent implements OnInit {
  title = "Chat bot";
  allAvailableSessions = [];
  sessionIdMessages = [];
  constructor(private http: HttpClient) {
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
  SelectedSessionId(sessionId: string) {
    this.getSessionIdMessages(sessionId).subscribe((data: any) => {
      this.sessionIdMessages.push({ sessionId: sessionId, messages: data.message })
    })
    window.location.href = "/user-operator-chat";
    // 2b7da06d-2568-4f1d-b611-37ec53c325dc
  }


  ngOnInit() {
  }

}
