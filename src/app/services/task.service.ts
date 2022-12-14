import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { TasksComponent } from '../components/tasks/tasks.component';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() : Observable<Task[]>{
    const tasks= of(TASKS);
    return tasks;

  }
}
