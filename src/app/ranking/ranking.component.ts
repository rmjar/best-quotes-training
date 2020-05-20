import { Quotation } from './../models/quotations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  @Input()
  quotes: Quotation[]

  constructor() { }

  ngOnInit(): void {
  }

}
