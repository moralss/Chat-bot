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
  button = `lets check`;
  btns = [];
  options = {};
  message = "";
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
        const keys = data.headers.keys();
        this.btns = keys.map(key => `${key}:${data.headers.get(key)}`)
        this.options = { ...data.body }
        console.log("data", this.options)
        // this.btns = data.node.map(item => item);
        // this.message = data.text;
      },
      err => console.error(err),
    );
    return this.btns;
  }
  selectedOption(e) {
    console.log(e);
    // return this.http.get('http://41.86.98.151:8080/node=' + uuid)
  }


}