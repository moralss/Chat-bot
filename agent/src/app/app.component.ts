import { Component } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Sessions } from "./app.sessions";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Chat bot";
  allAvailableSessions = [];
  constructor(private http: HttpClient) {
    this.ShowFirstSessions();
  }
  getFirstSessions(): Observable<HttpResponse<Sessions>> {
    return this.http.get<Sessions>("http://41.86.98.151:8080/getChatSessions", {
      observe: "response"
    });
  }

  ShowFirstSessions() {
    this.getFirstSessions().subscribe(
      data => {
        data.body.map(element => {
          this.allAvailableSessions.push(element);
        });
      }
    )
  }
  SelectedSessionId(sessionId: string) {
    console.log('sessionId :', sessionId);
  }
}
