import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription} from 'rxjs'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Task Management"

  showAddTask: boolean = false;
  sbjSubscription?: Subscription;
  
  constructor( private uiService: UiService) {
    this.sbjSubscription = this.uiService.onToggle()
                                .subscribe( (value) => {
                                  this.showAddTask = value
                                })
   }

  ngOnInit(): void {
  }

  toggleTask(){
    console.log("Toggle from header component")
    this.uiService.toggleAddTask()
  }

}
