import { OffersService } from './../../../../service/offers.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offers-dialogo',
  templateUrl: './offers-dialogo.component.html',
  styleUrls: ['./offers-dialogo.component.css']
})
export class OffersDialogoComponent implements OnInit {

  constructor(private offerService : OffersService, private dialogRef : MatDialogRef<OffersDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado : boolean){
    this.offerService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
