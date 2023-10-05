import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childMessage = "Hello Prent from Child"

  @Input() messages = ""
  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() sendEvent = new EventEmitter<string>();

  sendMessage(){
    this.sendEvent.emit(this.childMessage)
  }

}
