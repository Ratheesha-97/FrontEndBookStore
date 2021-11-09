import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { EventEmitter } from 'stream';
import { ReviewService } from '../../services/review.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  reviewForm!: FormGroup;
  BId: any;
  today!: any;
  submitted: boolean=false;
  error:boolean=false;
  @Output() onSubmit=new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private reviewService: ReviewService, private router: Router) {
    this.reviewForm = new FormGroup({
      UserId: new FormControl(2),
      BookId: new FormControl(),
      Review1: new FormControl(null),
      Rating: new FormControl(0, Validators.compose([Validators.min(0), Validators.max(5)])),
      SubmittedAt:new FormControl()
    })
  }

  ngOnInit(): void {
    this.BId = this.route.snapshot.paramMap.get('id');
    console.log(this.route);

    this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, '0');
    var mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = mm + '/' + dd + '/' + yyyy;
    console.log(this.today);

    this.reviewForm.controls['BookId'].setValue(this.BId);
    this.reviewForm.controls['SubmittedAt'].setValue(this.today);
    this.reviewForm.controls['Review1'].setValue('');
    this.reviewForm.controls['Rating'].setValue(0);
    this.submitted=false;
    this.error=false;
  }

  addReview() {
    console.log(this.reviewForm.value)
    
    this.reviewService.addReviewFun(this.reviewForm.value).subscribe(
      (res: any) => console.log('HTTP response', res),
      (err: any) => {console.log('HTTP Error', err); this.error=true;},
      () => console.log('HTTP request completed.')
  );
    this.submitted=true;
    
    setTimeout(() => {
      this.onSubmit.emit(true); 
      this.ngOnInit();
   }, 2000);
  }

}
