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

  async ngOnInit(): Promise<void> {
    let cId = this.route.snapshot.paramMap.get('id');
    this.coupon=await this.couponService.getCouponById(cId);
    
    this.editCouponForm.setValue({
      'CouponId' :this.coupon['CouponId'],
      'DiscountPercentage':this.coupon['DiscountPercentage'],
      'MaximumDiscount' :this.coupon['MaximumDiscount'],
      'MinimumOrderPrice':this.coupon['MinimumOrderPrice'],
      'Expiry' :this.coupon['Expiry'].substring(0,10)
  
    });
  }
  editCoupon(){
    console.log(this.editCouponForm.value);
    this.couponService.updateCoupon(this.editCouponForm.value,this.router);
  }
}
