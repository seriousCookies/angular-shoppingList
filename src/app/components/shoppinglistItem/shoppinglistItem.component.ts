import { Component, OnInit } from '@angular/core';
import { shopping } from './../../models/shopping';

@Component({
  selector: 'app-shoppinglistItem',
  templateUrl: './shoppinglistItem.component.html',
  styleUrls: ['./shoppinglistItem.component.scss'],
})
export class shoppinglistItemComponent implements OnInit {
  shoppinglistItem: shopping[];
  inputshopping: string = '';

  constructor() {}

  ngOnInit(): void {
    this.shoppinglistItem = [];
  }

  toggleDone(e: any, id: number) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    this.shoppinglistItem.map((el, i) => {
      if (i == id) el.completed = !el.completed;
      return el;
    });
  }
  deleteshopping(id: number) {
    this.shoppinglistItem = this.shoppinglistItem.filter((v, i) => i !== id);
  }
  addshopping() {
    if (this.inputshopping !== '') {
      this.shoppinglistItem.push({
        content: this.inputshopping,
        completed: false,
      });
      this.inputshopping = '';
    }
  }
}
