import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders-list/orders/orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewOrderComponent } from './orders-list/new-order/new-order.component';
import { ReportComponent } from './report/report.component';

import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './authentication/login/login.component';
import { SignoutComponent } from './authentication/signout/signout.component'

import {MatProgressSpinnerModule, MatCardModule, MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    NewOrderComponent,
    ReportComponent,
    LoginComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
