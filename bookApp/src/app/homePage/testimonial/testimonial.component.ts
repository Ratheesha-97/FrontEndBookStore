import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestimonialService } from 'src/app/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testSubscription: Subscription | undefined = undefined;
  testData:any[]=[];
  threeData:any[]=[];
  constructor(private testServ:TestimonialService) { }

  ngOnInit(): void {

    this.testSubscription = this.testServ.getTestimonials()
    //3. get the response from the service
    .subscribe((res:any) => {
      console.log(res);
      this.testData=res;
      this.threeData=res.slice(0,3);
      });


  }

}
