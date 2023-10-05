import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task'; 


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes

  @Input() task?: Task
  constructor() { }

  ngOnInit(): void {
  }

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToogleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  taskToggle(task: Task){
    this.onToogleReminder.emit(task)
  }

}
