import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../orders-list.service';
import { Order } from '../orders-list.module';
import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  form: FormGroup;
  order: Order;

  constructor(
    public orderslist: OrdersListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      // we pass a reference and angular will execute the validators on the form control
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {
        validators: [Validators.required]
      }),
      region: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  OnSaveOrder () {
    this.orderslist.AddOrder(
      this.form.value.title,
      this.form.value.content,
      this.form.value.region
    );
    this.form.reset();
  }
 
}
