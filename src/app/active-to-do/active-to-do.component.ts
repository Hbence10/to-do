import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Exercise } from '../to-do.module';

@Component({
  selector: 'app-active-to-do',
  templateUrl: './active-to-do.component.html',
  styleUrl: './active-to-do.component.css'
})
export class ActiveToDoComponent  implements OnInit{
  activeToDos: Exercise[] = []

  constructor(public service : ToDoService){}

  ngOnInit(): void {
    this.activeToDos = this.service.activeToDos
  }
}
