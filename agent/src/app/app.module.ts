import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserOperatorChatComponent } from './user-operator-chat/user-operator-chat.component';
import { ViewAllSessionIdsComponent } from './view-all-session-ids/view-all-session-ids.component';

@NgModule({
  declarations: [AppComponent, UserOperatorChatComponent, ViewAllSessionIdsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
