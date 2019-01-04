import { Component } from "@angular/core";
import { DataService } from './data.service';
import { ViewAllSessionIdsComponent } from './view-all-session-ids/view-all-session-ids.component';
import { UserOperatorChatComponent } from './user-operator-chat/user-operator-chat.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService],
})
export class AppComponent {

}
