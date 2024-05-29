import { Injectable, OnInit } from '@angular/core';
import { Exercise } from './to-do.module';

@Injectable({
  providedIn: 'root'
})
export class ToDoService implements OnInit{
  toDos : Exercise[] = []
  completeToDos : Exercise[] = []
  activeToDos : Exercise[] = []

  ngOnInit(): void {
    
  }

  constructor() { }

  edit(exercise: Exercise){
    console.log("edit function called")
  }

  finish(exercise: Exercise){
    exercise.finish = true;
    this.completeToDos.push(exercise)
    this.activeToDos.splice(this.toDos.indexOf(exercise), 1)
    localStorage.setItem("completedToDos", JSON.stringify(this.completeToDos))
    localStorage.setItem("activeToDos", JSON.stringify(this.activeToDos))
    localStorage.setItem("toDos", JSON.stringify(this.toDos))
  }

  addToDo(ex:string){
    this.toDos.push(new Exercise(ex, new Date(), false, "normal"))
    this.activeToDos.push(new Exercise(ex, new Date(), false, "normal"))
    localStorage.setItem("toDos", JSON.stringify(this.toDos))
    localStorage.setItem("activeToDos", JSON.stringify(this.activeToDos))
  }
}
 