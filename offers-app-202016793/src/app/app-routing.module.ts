import { OffersCreaeditaComponent } from './page/offers/offers-creaedita/offers-creaedita.component';
import { OffersCountComponent } from './page/offers/offers-count/offers-count.component';
import { OffersComponent } from './page/offers/offers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'business/offers', component: OffersComponent, children: [
  ]
},{
  path: 'home', component: OffersCountComponent, children: [
  ]
},{
  path: 'admin/offers/new', component: OffersCreaeditaComponent, children: [
  ]
},
{
  path: 'admin/offers/edit/:id', component: OffersCreaeditaComponent, children: [
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
