import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = "Hello Child"

  receiveMessageData = ""

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg:any){
    this.receiveMessageData = msg
  }

}
