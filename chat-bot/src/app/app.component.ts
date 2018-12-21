import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "chat-bot";
  button = `lets check`;
  btns = ["User cannot login", "User has probelms with Java", "The system is down"];
}
