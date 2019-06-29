import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

   weather: any;


  constructor(public rest: CurrencyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrency();
  }

  getCurrency() {
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.weather = data;

    });
  }

}
