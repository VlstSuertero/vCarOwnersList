import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() data: any
  @Output() addNewOwnerEvent = new EventEmitter()
  @Output() actionsEvent = new EventEmitter()
  @Output() idEvent = new EventEmitter()
  @Output() removeEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  sendId(id: string) {
    this.idEvent.emit(id)
  }

  addNewOwner($event: any) {
    this.addNewOwnerEvent.emit($event)
  }

  actionWithOwner(action: string) {
    this.actionsEvent.emit(action)
  }

  removeOwner($event: any) {
    this.removeEvent.emit($event)
  }
}
