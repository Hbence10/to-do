import { Injectable, OnInit } from '@angular/core';
import { Exercise } from './to-do.module';

@Injectable({
  providedIn: 'root'
})
export class ToDoService implements OnInit{
  toDos: Exercise[] = JSON.parse(localStorage.getItem("toDos") as string)
  completeToDos : Exercise[] = JSON.parse(localStorage.getItem("completedToDos") as string)
  activeToDos : Exercise[] = JSON.parse(localStorage.getItem("activeToDos") as string)

  ngOnInit(): void {    
    
  }

  constructor() { 
    this.startUp()
  }

  edit(exercise: Exercise, newToDo: string){
    this.toDos[this.toDos.indexOf(exercise)].name = newToDo;
    localStorage.setItem("toDos", JSON.stringify(this.toDos))
    localStorage.setItem("activeToDos", JSON.stringify(this.activeToDos))
  }

  finish(exercise: Exercise){
    exercise.finish = true;
    
    this.completeToDos.push(exercise)
    this.activeToDos.splice(this.activeToDos.indexOf(exercise), 1)
      

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

  startUp(){
    if(this.toDos == null){
      this.toDos = []
    }

    if(this.activeToDos == null){
      this.activeToDos = []
    }

    if(this.completeToDos == null){
      this.completeToDos = []
    }
  }
}
 