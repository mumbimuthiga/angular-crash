import { Component, Input, OnInit } from '@angular/core';
import { Task } from  '../../Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//import { Task } from 'src/app/Task';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 // @Input() task : Task|undefined ;
  //@Input() task: Task | undefined ;
  @Input() task!: Task;
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
