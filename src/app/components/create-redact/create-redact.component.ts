import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OwnerModel } from '../../models';


@Component({
  selector: 'app-create-redact',
  templateUrl: './create-redact.component.html',
  styleUrls: ['./create-redact.component.scss']
})
export class CreateRedactComponent implements OnInit {

  @Input() owner!: OwnerModel
  @Input() ownerForm!: FormGroup
  @Input() action!: string
  @Output() addNewCarEvent =new EventEmitter()
  @Output() removeCarEvent =new EventEmitter()
  @Output() editOwnerEvent =new EventEmitter()

  constructor() {}

  ngOnInit() {}


  addNewCar($event: any) {
    this.addNewCarEvent.emit($event)
  }

  removeCar(carId: string) {
    this.removeCarEvent.emit(carId)
  }

  editOwner($event: any) {
    this.editOwnerEvent.emit($event)
  }

  show() {
    console.log(this.ownerForm.value)
  }
}

