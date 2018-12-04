import { Injectable } from "@angular/core";
import { Order } from "./orders-list.module";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Observer, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { post } from "selenium-webdriver/http";

@Injectable({ providedIn: 'root' })
export class OrdersListService {
    private ordersList: Order[] = [];
    constructor(private http: HttpClient, private router: Router) {}

    getOrdersList () {
        return this.http
        .get('http://localhost:8080/orderlist/')
    }

    AddOrder (title: string, content: string, region: string) {
        const order ={
            title: title,
            content: content,
            region: region
        };

        this.http.post('http://localhost:8080/create/', order)
        .subscribe( response => {
            this.router.navigate(['/orderlist']);
        });
    }

    DeleteOrder(id: string) {
        //TODO
    }

    UpdateExistingOrder (title: string, content: string, region: string, id: string) {
        //TODO
    }
}

