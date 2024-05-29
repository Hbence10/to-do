import { Injectable } from '@angular/core';
import { Exercise } from './to-do.module';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDos : Exercise[] = [new Exercise("Fu nyiras", new Date()), new Exercise("Mosas", new Date())]

  constructor() { }

  edit(exercise: Exercise){
    console.log("edit function called")
  }
}
 