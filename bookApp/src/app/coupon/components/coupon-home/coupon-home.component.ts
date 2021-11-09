import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-coupon-home',
  templateUrl: './coupon-home.component.html',
  styles: [
  ]
})
export class CouponHomeComponent implements OnInit {
  coupons: any[]=[];
  coupon:any|undefined;
  constructor(private CouponServices:CouponService) { }

  ngOnInit(): void {
    this.allCoupons();
  }
  allCoupons(){
    this.CouponServices.getCoupons().subscribe(data=>{
      this.coupons=data;
    })
  }
  deleteCoupon(id: any){
    this.CouponServices.deleteCouponById(id).subscribe(data=>{
      console.log(data);
      alert("Delete Successfull");
      this.allCoupons();
  })}
}
