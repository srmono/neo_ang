import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit(): void {
    this.taskService
        .getAllTasks()
        .subscribe( (tasks) => {
          this.tasks = tasks
        })
  }


  deleteTask(task: Task){
    this.taskService
        .deleteTask(task)
        .subscribe(
          () => {
            this.tasks = this.tasks.filter(tsk => tsk.id !== task.id )
          }
        )
  }

  onToogleReminder(task: Task){
    task.reminder = !task.reminder

    this.taskService
        .updateTaskReminder(task)
        .subscribe()
  }
  addTask(task: Task){
    this.taskService 
        .addTask(task)
        .subscribe( (task) => (this.tasks.push(task)) )
  }

    // tasks: Task[] = [
  //   {
  //   "id": 1,
  //   "text": "Form Validation",
  //   "day": "Oct 5th at 1:30pm",
  //   "reminder": true
  //   },
  //   {
  //   "id": 2,
  //   "text": "Angular app",
  //   "day": "Oct 6th at 9:30pm",
  //   "reminder": false
  //   }
  //   ]

}
