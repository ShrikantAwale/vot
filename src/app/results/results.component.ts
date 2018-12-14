import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

declare var $:any;
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  count1=[];
  count2=[];
  count3=[];
  count4=[];
  winnerParty:number=3;
  currentWinner:string;

  constructor(private vote:VoteService) { }

  ngOnInit() {
    this.count1.length = this.vote.voteList[0].votesGained;
    this.count1.fill(1);

    this.count2.length = this.vote.voteList[1].votesGained;
    this.count2.fill(2);

    this.count3.length = this.vote.voteList[2].votesGained;
    this.count3.fill(3);
    
    this.count4.length = this.vote.voteList[3].votesGained;
    this.count4.fill(4);
  }

  ngAfterContentChecked(){
    this.winnerParty = this.vote.checkWinner();
    this.count1.length=this.vote.voteList[0].votesGained;
    this.count1 = this.count1.fill(1);
    this.count2.length=this.vote.voteList[1].votesGained;
    this.count2 = this.count2.fill(2);
    this.count3.length=this.vote.voteList[2].votesGained;
    this.count3 = this.count3.fill(3);
    this.count4.length=this.vote.voteList[3].votesGained;
    this.count4 = this.count4.fill(4);
    console.log("Winner Party: "+ this.winnerParty);
  }

}
