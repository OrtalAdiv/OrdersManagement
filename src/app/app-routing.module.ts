import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { OrdersComponent } from './orders-list/orders/orders.component';
import { NewOrderComponent } from './orders-list/new-order/new-order.component';
import { ReportComponent } from './report/report.component';
import {LoginComponent} from './authentication/login/login.component'
import {SignoutComponent} from './authentication/signout/signout.component'

const routes: Routes = [
    {path: 'orderlist', component: OrdersComponent },
    {path: 'create', component: NewOrderComponent },
    {path: '', component: ReportComponent },
    {path: 'report', component: ReportComponent },
    {path: 'login', component: LoginComponent },
    {path: 'signout', component: SignoutComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}