import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  public couponData:any;
  submitted: boolean = false;
  addCouponForm=new FormGroup({
    'CouponId' :new FormControl(null,Validators.required),
    'DiscountPercentage':new FormControl(null,Validators.compose([Validators.required,Validators.min(0)])),
    'MaximumDiscount' :new FormControl(null,Validators.compose([Validators.required,Validators.min(0)])),
    'MinimumOrderPrice': new FormControl(null,Validators.compose([Validators.required,Validators.min(0)])),
    'Expiry' :new FormControl(null,Validators.required)

  });
  constructor(private couponService:CouponService,private router:Router) { }

  ngOnInit(): void {
    this.addCouponForm=new FormGroup({
      'CouponId' :new FormControl(null,Validators.required),
      'DiscountPercentage':new FormControl(null,Validators.compose([Validators.required,Validators.min(1)])),
      'MaximumDiscount' :new FormControl(0,Validators.compose([Validators.min(0)])),
      'MinimumOrderPrice': new FormControl(0,Validators.compose([Validators.min(0)])),
      'Expiry' :new FormControl(null,Validators.required)
  
    });
  }
  addCoupon(){
    this.submitted=true;
    if(this.addCouponForm.valid){
      this.couponService.addCouponFun(this.addCouponForm.value,this.router);
    }
    
  }
}
