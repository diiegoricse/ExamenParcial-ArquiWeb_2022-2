import { Offers } from './../../../model/Offers';
import { OffersService } from './../../../service/offers.service';
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-offers-listar',
  templateUrl: './offers-listar.component.html',
  styleUrls: ['./offers-listar.component.css']
})
export class OffersListarComponent implements OnInit {
  dataSource: MatTableDataSource<Offers> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title','description','points','businessId'];
  
  constructor(private ps: OffersService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => { 
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
