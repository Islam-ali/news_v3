import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/@core/services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  pollQuestion: any;
  answerID: any;
  userAnswer = false;
  answers: any[] = [];
  answerCount = false;
  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.getPollQuestion();
  }
  getPollQuestion() {
    this.pollService.pollQuestion().subscribe({
      next: (res: any) => {
        console.log(res);
        this.pollQuestion = res.data;
        this.answers = res.data?.answers;
        this.userAnswer = this.pollService.checkUserAnswer(
          this.pollQuestion?.id
        );
        console.log(this.userAnswer);
        if (this.userAnswer) {
          this.pollResult();
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getAnswer(answerID: number) {
    console.log(answerID);
    this.answerID = answerID;
  }
  submitPoll() {
    if (!this.answerID) {
      return;
    }
    this.pollService
      .pollSubmit({
        answer_id: this.answerID,
        question_id: this.pollQuestion.id,
      })
      .subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.success) {
            localStorage.setItem('pollAnswer', this.pollQuestion.id);
            this.pollResult();
            this.userAnswer = true;
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
  pollResult() {
    this.answers.forEach((answer: any) => {
      this.pollService.pollResult(answer.id).subscribe({
        next: (res: any) => {
          console.log(res);
          if (res.success) {
            answer.count = res.data.count;
            answer.percentage = res.data.percentage;

            console.log(this.answers);
            this.answerCount = true;
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });
  }
}
