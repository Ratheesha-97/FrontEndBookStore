import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookSubmissionServiceService } from 'src/app/admin/book-submission/book-submission-service.service';

@Component({
  selector: 'app-book-submit',
  templateUrl: './book-submit.component.html',
  styleUrls: ['./book-submit.component.css']
})
export class BookSubmitComponent implements OnInit {


  addCategoryForm = new FormGroup({
    'BSId': new FormControl(),
    'Author': new FormControl(),
    'Title': new FormControl(),
    'Description': new FormControl(),
    'UserName': new FormControl(),
    'Condition': new FormControl(),
    'ReviewStatus': new FormControl(),
    'UId': new FormControl()

  });

  BsId: any;
  BookSubmission: any;
  failedUpdate = false;
  successUpdate = false;
  errorMessage = "";


  constructor(private bookSubmissionService: BookSubmissionServiceService) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.bookSubmissionService.addSubmission(this.addCategoryForm.value)
      .subscribe((res: any) => {
        console.log("Updated Book Submission recieved in ts -> ", res);

        this.failedUpdate = false;
        this.successUpdate = true;
        this.BookSubmission = res;
      },
        (error) => {
          console.log("error here in TS of edit order -> ", error);
          this.successUpdate = false;
          this.failedUpdate = true;
          this.errorMessage = error;
        })
  }


}
