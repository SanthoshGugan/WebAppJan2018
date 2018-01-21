import { Component, OnInit } from '@angular/core';
import { Food2Fork } from './../service/food2Fork';
import { Response } from '@angular/http';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
  providers: [Food2Fork]
})
export class ReceipeListComponent implements OnInit {

  constructor(public food2Fork: Food2Fork) { }

  ngOnInit() {
    this.food2Fork.fetchFood().subscribe((res: Response) => {
      console.log(res.json());
    });
  }

}
