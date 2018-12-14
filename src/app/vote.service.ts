import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  totalVotes = 20;
  maxVal=8;

  voteList = [
    {
        "partyId": 1 ,
        "partyName":"BJP",
        "votesGained":7
    },
    {
        "partyId": 2 ,
        "partyName":"NCP",
        "votesGained":2
    },
    {
        "partyId": 3 ,
        "partyName":"BSP",
        "votesGained":8
    },
    {
        "partyId": 4 ,
        "partyName":"AAP",
        "votesGained":3
    }
  ];
  
  constructor() { }

  addMyVote(myVote: number) {
    if (this.totalVotes < 60) {
      switch (myVote) {
        case 1:
          this.voteList[0].votesGained++;
          if(this.voteList[0].votesGained>this.maxVal){ this.maxVal = this.voteList[0].votesGained; }
          this.totalVotes++;
          break;
        case 2:
          this.voteList[1].votesGained++;
          if(this.voteList[1].votesGained>this.maxVal){ this.maxVal = this.voteList[1].votesGained; }
          this.totalVotes++;
          break;
        case 3:
          this.voteList[2].votesGained++;
          if(this.voteList[2].votesGained>this.maxVal){ this.maxVal = this.voteList[2].votesGained; }
          this.totalVotes++;
          break;
        case 4:
          this.voteList[3].votesGained++;
          if(this.voteList[3].votesGained>this.maxVal){ this.maxVal = this.voteList[3].votesGained; }
          this.totalVotes++;
          break;
      }
    }

  }

  checkWinner() {
    if(this.voteList[0].votesGained == this.maxVal){
      return 1;
    }
    if(this.voteList[1].votesGained == this.maxVal){
      return 2;
    }
    if(this.voteList[2].votesGained == this.maxVal){
      return 3;
    }
    if(this.voteList[3].votesGained == this.maxVal){
      return 4;
    }
  }

}
