import { Component, OnInit } from '@angular/core';
import {Customer} from "./Customer";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'ngr-forms-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
