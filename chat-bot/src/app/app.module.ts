import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpeakToAgentComponent } from "./speak-to-agent/speak-to-agent.component";
import { SpeakToBotComponent } from './speak-to-bot/speak-to-bot.component';

@NgModule({
  declarations: [AppComponent, SpeakToAgentComponent, SpeakToBotComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
