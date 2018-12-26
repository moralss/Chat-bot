import { Component } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Options } from "./app.options";
import { Observable } from "rxjs";
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
    this.Reset();
  }
  Reset() {
    this.messagesAndResponses = [];
    this.btns = [];
    this.ShowFirstOptions();
  }
  getFirstOptions(): Observable<HttpResponse<Options>> {
    return this.http.get<Options>("http://41.86.98.151:8080/tree?name=test", {
      observe: "response"
    });
  }

  getOptions(nodeId: string): Observable<HttpResponse<Options>> {
    return this.http.get<Options>(
      "http://41.86.98.151:8080/node?nodeid=" + nodeId,
      { observe: "response" }
    );
  }

  ShowFirstOptions() {
    this.getFirstOptions().subscribe(
      data => {
        this.btns = data.body.node;
        this.messagesAndResponses.push({
          data: data.body.text,
          style: "speech-bubble"
        });
      },

      err => console.error(err)
    );
    return this.btns;
  }

  showOptions(selectedOption) {
    this.messagesAndResponses.push({
      data: selectedOption.option,
      style: "speech-bubble-response",
      image: selectedOption.nodeimage
    });
    this.getOptions(selectedOption.nodeid).subscribe(
      data => {
        if (data.body.text) {
          this.btns = data.body.node;
          this.messagesAndResponses.push({
            data: data.body.text,
            style: "speech-bubble"
          });
          window.scrollTo(0, 10000);
        }
      },
      err => console.error(err)
    );
    return this.btns;
  }
  sendMessage(event: any) {
    if (event.keyCode === 13) {
      const value = event.path[0].value;
      this.showOptions(this.btns[value - 1])
    }
  }
}
