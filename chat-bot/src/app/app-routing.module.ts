import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakToAgentComponent } from './speak-to-agent/speak-to-agent.component'
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: 'speak-to-agent', component: SpeakToAgentComponent },
  { path: 'home', component: AppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
