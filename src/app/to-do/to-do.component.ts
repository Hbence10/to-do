import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Exercise } from '../to-do.module';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})

export class ToDoComponent implements OnInit{

  constructor(public service: ToDoService){}
  toDos : Exercise[] = []
  ngOnInit(): void {
    this.toDos = this.service.toDos
    console.log(this.toDos);
  }
  
  edit(exercise: Exercise){
    this.service.edit(exercise);
  }

  finish(exercise: Exercise){
    exercise.finishedAt = new Date()
    exercise.classList = "finish";
    this.service.finish(exercise)
  }
}
