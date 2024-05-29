import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent implements OnInit{
  newToDo : string = ""

  constructor(public service:ToDoService){}

  ngOnInit(): void {
    
  }

  addToDo(ex:string){
    this.service.addToDo(ex)
  }
}
