import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

todos:Todo[];
inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
    ]
  }

  toggleDone(id:number) {
    this.todos.map((el, i)=> {
      if (i==id) el.completed = !el.completed;
      return el;
    })
  }
  deleteToDo(id:number){
    this.todos=this.todos.filter((v,i)=> i!==id);
  }
  addToDo() {
    this.todos.push({
      content:this.inputTodo,
      completed: false
    })
    this.inputTodo="";
  }
}
