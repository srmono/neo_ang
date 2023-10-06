import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  text: string = '';
  day: string = "";
  reminder: boolean = false;

  showAddTask?: boolean;
  subription?: Subscription

  constructor(
    private uiService: UiService
  ) { 
    this.subription = this.uiService.onToggle().subscribe(
      (value) => {this.showAddTask = value}
    )
  }

  ngOnInit(): void {
  }

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit(){
    //validations
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
