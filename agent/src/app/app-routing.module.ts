import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserOperatorChatComponent } from './user-operator-chat/user-operator-chat.component';
import { ViewAllSessionIdsComponent } from './view-all-session-ids/view-all-session-ids.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
