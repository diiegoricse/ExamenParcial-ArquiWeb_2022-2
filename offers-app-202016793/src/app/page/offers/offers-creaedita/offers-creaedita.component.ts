import { OffersService } from './../../../service/offers.service';
import { Offers } from './../../../model/Offers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offers-creaedita',
  templateUrl: './offers-creaedita.component.html',
  styleUrls: ['./offers-creaedita.component.css']
})
export class OffersCreaeditaComponent implements OnInit {
  offers: Offers = new Offers();

  mensaje: string = "";
  constructor(private offerService: OffersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  aceptar() {

    if (this.offers.id != 0 && this.offers.title.length > 0 && (this.offers.title.length>0 && this.offers.title.length<=60) && (this.offers.points > 0 && this.offers.points<100 )) {
      this.offerService.insertar(this.offers).subscribe(data => {
        this.offerService.listar().subscribe(data => {
          this.offerService.setLista(data);
        })
      });
      this.router.navigate(['business/offers']);
    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

}
