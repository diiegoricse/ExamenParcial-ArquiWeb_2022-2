import { OffersService } from './../../../service/offers.service';
import { Offers } from './../../../model/Offers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-offers-creaedita',
  templateUrl: './offers-creaedita.component.html',
  styleUrls: ['./offers-creaedita.component.css']
})
export class OffersCreaeditaComponent implements OnInit {
  offers: Offers = new Offers();

  mensaje: string = "";

  id: number = 0;
  edicion: boolean = false;
  constructor(private offerService: OffersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar() {

    if (this.offers.id != 0 && this.offers.title.length > 0 && (this.offers.title.length > 0 && this.offers.title.length <= 60) && (this.offers.points > 0 && this.offers.points < 100)) {
      if (this.edicion) {
        this.offerService.modificar(this.offers).subscribe(data => {
          this.offerService.listar().subscribe(data => {
            this.offerService.setLista(data);
          });
        });
      }
      else {
        this.offerService.insertar(this.offers).subscribe(data => {
          this.offerService.listar().subscribe(data => {
            this.offerService.setLista(data);
          })
        });
      }
      this.router.navigate(['business/offers']);
    }
    else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

  //
  init() {
    if (this.edicion) {
      this.offerService.listarId(this.id).subscribe(data => {
        this.offers = data;
      });
    }
  }
}
