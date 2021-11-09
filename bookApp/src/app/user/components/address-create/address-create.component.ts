import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/address.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {


  isSaved: boolean = false;
  isEdit: boolean = false;

  @Input()
  address: Address | undefined;

  addAddressForm!: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    if (this.address == undefined) {
      this.addAddressForm = new FormGroup({
        UId: new FormControl(this.userService.getUserId()),
        Name: new FormControl('', Validators.required),
        Building: new FormControl('', Validators.required),
        Street: new FormControl('', Validators.required),
        City: new FormControl('', Validators.required),
        State: new FormControl('', Validators.required),
        Country: new FormControl('', Validators.required),
        PhoneNo: new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'), Validators.required]),
        Pincode: new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9]'), Validators.required]),
      })
    } else {
      this.isEdit = true;
      this.addAddressForm = new FormGroup({
        UId: new FormControl(this.userService.getUserId()),
        Name: new FormControl(this.address.Name, Validators.required),
        Building: new FormControl(this.address.Building, Validators.required),
        Street: new FormControl(this.address.Street, Validators.required),
        City: new FormControl(this.address.City, Validators.required),
        State: new FormControl(this.address.State, Validators.required),
        Country: new FormControl(this.address.Country, Validators.required),
        PhoneNo: new FormControl(this.address.PhoneNo, [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'), Validators.required]),
        Pincode: new FormControl(this.address.Pincode, [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9]'), Validators.required]),
      })
    }
  }

  handleAddressCreate() {
    console.log("Submitting");

    this.userService.createAddress(this.addAddressForm.value)
      .subscribe((res: any) => {
        if (res && res.AId) {
          this.isSaved = true;
        }
      })
  }

}
