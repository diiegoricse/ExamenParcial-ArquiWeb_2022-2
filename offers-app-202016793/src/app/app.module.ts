import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersComponent } from './page/offers/offers.component';
import { OffersListarComponent } from './page/offers/offers-listar/offers-listar.component';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


import { MatDialogModule } from '@angular/material/dialog';

import {MatToolbarModule} from '@angular/material/toolbar';
import { OffersCountComponent } from './page/offers/offers-count/offers-count.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OffersListarComponent,
    NavBarComponent,
    OffersCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTableModule,
    FormsModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,

    MatDialogModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
