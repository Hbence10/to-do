import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Exercise } from '../to-do.module';

@Component({
  selector: 'app-completed-to-do',
  templateUrl: './completed-to-do.component.html',
  styleUrl: './completed-to-do.component.css'
})
export class CompletedToDoComponent implements OnInit{
  constructor(public service: ToDoService){}
  completedToDo : Exercise[] = []

  ngOnInit(): void {
      this.completedToDo = this.service.completeToDos;
  }

  
}
