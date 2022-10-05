import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/service/offers.service';

@Component({
  selector: 'app-offers-count',
  templateUrl: './offers-count.component.html',
  styleUrls: ['./offers-count.component.css']
})
export class OffersCountComponent implements OnInit {
  total :number=0;
  constructor(private ps: OffersService) { }

  ngOnInit(): void {
    this.total = this.ps.getLista().subscribe.length;
  }

}
