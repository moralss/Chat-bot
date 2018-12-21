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
  btns = ["User cannot login", "User has problems with Java", "The system is down"];
  options = {};
  constructor(private http: HttpClient) {
    this.getData();
    this.getOptions();
  };

  getData() {
    return this.http.get('http://41.86.98.151:8080/tree?name=test')
  };
  getOptions() {
    this.getData().subscribe(
      data => { this.options = data; console.log("something different", data); },
      err => console.error(err),
    );
    return this.options;
  }
}