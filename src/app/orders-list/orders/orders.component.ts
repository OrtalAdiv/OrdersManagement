import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersListService } from '../orders-list.service';
import { Order } from '../orders-list.module';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
    private orderlist: Order[] = [];
    isloading: boolean = false;
    constructor(
      public orderService: OrdersListService
    ) { }

    ngOnInit() {
      this.isloading = true;
      console.log(this.isloading);
      this.orderService.getOrdersList()
      .subscribe((data: Order[]) => {
        console.log(data);
        this.orderlist = data;
        this.isloading = false;
        console.log(this.isloading);
      });
    }

    ngOnDestroy() {
      this.orderlist = null;
    }

  }