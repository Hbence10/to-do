import { Injectable, OnInit } from '@angular/core';
import { Exercise } from './to-do.module';

@Injectable({
  providedIn: 'root'
})
export class ToDoService implements OnInit{
  toDos : Exercise[] = []
  completeToDos : Exercise[] = []

  ngOnInit(): void {
    localStorage.setItem("toDos", JSON.stringify(this.toDos))
    console.log("localstorage:")
    console.log(localStorage.getItem("toDos"));
  }

  constructor() { }

  edit(exercise: Exercise){
    console.log("edit function called")
  }

  finish(exercise: Exercise){
    console.log(`${exercise.name} done`)
    exercise.finish = true;
    this.completeToDos.push(exercise)
    //this.toDos.splice(this.toDos.indexOf(exercise), 1)
  }

  addToDo(ex:string){
    this.toDos.push(new Exercise(ex, new Date(), false, "normal"))
  }
}
 