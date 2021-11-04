import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styles: [
  ]
})
export class EditCouponComponent implements OnInit {
  public coupon:any
  editCouponForm=new FormGroup({
    'CouponId' :new FormControl(null),
    'DiscountPercentage':new FormControl(null,Validators.min(0)),
    'MaximumDiscount' :new FormControl(null,Validators.min(0)),
    'MinimumOrderPrice': new FormControl(null,Validators.min(0)),
    'Expiry' :new FormControl(null)

  });
  constructor(private couponService:CouponService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let cId = this.route.snapshot.paramMap.get('id');
    this.couponService.getCouponById(cId).subscribe(data=>{
      this.coupon=data;
      console.log(data['CouponId']);
      console.log(this.coupon['CouponId']);
      
    });
    this.editCouponForm =new FormGroup({
      'CouponId' :new FormControl(this.coupon['CouponId']),
      'DiscountPercentage':new FormControl(this.coupon['DiscountPercentage'],Validators.min(0)),
      'MaximumDiscount' :new FormControl(this.coupon['MaximumDiscount'],Validators.min(0)),
      'MinimumOrderPrice': new FormControl(this.coupon['MinimumOrderPrice'],Validators.min(0)),
      'Expiry' :new FormControl(this.coupon['Expiry'],Validators.required)
  
    });
  }
  editCoupon(){
    console.log(this.editCouponForm.value);
    this.couponService.updateCoupon(this.editCouponForm.value,this.router);
  }
}
