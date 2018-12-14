import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { ResultsComponent } from './results/results.component';
import { VoteService } from './vote.service';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [VoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
