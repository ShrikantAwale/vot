import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  
  
  constructor(private vote:VoteService) { }


  ngOnInit() {
  }

  addVote(myVote:number){
    this.vote.addMyVote(myVote);
  }
}
