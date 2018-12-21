import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
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

  getData() {
    return this.http.get('http://41.86.98.151:8080/tree?name=test')
  };
  getOptions() {
    this.getData().subscribe(
      data => {
        this.btns = data.node.map(item => item);
        this.message = data.text;
      },
      err => console.error(err),
    );
    return this.options;
  }
  selectedOption(e) {
    console.log(e);
    // return this.http.get('http://41.86.98.151:8080/node=' + uuid)
  }


}