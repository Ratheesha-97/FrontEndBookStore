import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  @Input() addresses: Address[] = [];
  selectedAddress: number = -1;

  @Output() onAddressSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAddress(id: number): void {
    this.selectedAddress = id;
    this.onAddressSelect.emit(id);
  }
  editAddress(id: number): void {

  }
  deleteAddress(id: number): void {

  }
}
