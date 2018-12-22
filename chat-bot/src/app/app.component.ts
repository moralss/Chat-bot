import { Component } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Options } from './app.options'
import { Observable } from 'rxjs';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "chat-bot";
  messagesAndResponses = [];
  btns = [];
  constructor(private http: HttpClient) {
    this.getFirstOptions();
    this.ShowFirstOptions();

    // this.getOptions();
    // this.showOptions();
  };

  getFirstOptions(): Observable<HttpResponse<Options>> {
    return this.http.get<Options>('http://41.86.98.151:8080/tree?name=test', { observe: 'response' });
  };

  getOptions(nodeId: string): Observable<HttpResponse<Options>> {
    return this.http.get<Options>('http://41.86.98.151:8080/tree?nodeid=' + nodeId, { observe: 'response' });
  };

  ShowFirstOptions() {
    this.getFirstOptions().subscribe(
      data => {
        this.btns = data.body.node;
        this.messagesAndResponses.push({ data: data.body.text, style: "speech-bubble" });
      },
      err => console.error(err),
    );
    return this.btns;
  }

  showOptions(e) {
    this.messagesAndResponses.push({ data: e.option, style: "speech-bubble-response" });
    this.getOptions(e.nodeid).subscribe(
      data => {
        this.btns = data.body.node;
        this.messagesAndResponses.push({ data: data.body.text, style: "speech-bubble" });
      },
      err => console.error(err),
    );
    return this.btns;
  }

}