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
        this.pollQuestion = res.data;
        this.answers = res.data?.answers;
        this.userAnswer = this.pollService.checkUserAnswer(
          this.pollQuestion?.id
        );
        if (this.userAnswer) {
          this.pollResult();
        }
      },
      error: (err: any) => {
      },
    });
  }
  getAnswer(answerID: number) {
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
          if (res.success) {
            localStorage.setItem('pollAnswer', this.pollQuestion.id);
            this.pollResult();
            this.userAnswer = true;
          }
        },
        error: (err: any) => {
        },
      });
  }
  pollResult() {
    this.answers.forEach((answer: any) => {
      this.pollService.pollResult(answer.id).subscribe({
        next: (res: any) => {
          if (res.success) {
            answer.count = res.data.count;
            answer.percentage = res.data.percentage;
            this.answerCount = true;
          }
        },
        error: (err: any) => {
        },
      });
    });
  }
}
