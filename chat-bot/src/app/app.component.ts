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
  constructor(private http: HttpClient) {
    this.getData();
    this.getOptions();
  };
  getData(): Observable<HttpResponse<Options[]>> {
    return this.http.get<Options[]>('http://41.86.98.151:8080/tree?name=test', { observe: 'response' });
  };
  getOptions() {
    this.getData().subscribe(
      data => {
        this.messagesAndResponses.push({ data: data.body.text, style: "speech-bubble" });
      },
      err => console.error(err),
    );
    return this.messagesAndResponses;
  }
  selectedOption(e) {
    this.messagesAndResponses.push({ data: e.option, style: "speech-bubble-response" });
    this.getData().subscribe(
      data => {
        this.messagesAndResponses.push({ data: "The api was successful t;aksaf;lkasd;lskf'kla;f;lsk fasdlkfl ;slak  ;kl as;ldkf ;laskf;lksa;dflk s;klf ;skaf;lsk?", style: "speech-bubble" });
      },
      err => console.error(err),
    );
    return this.messagesAndResponses;
  }

}