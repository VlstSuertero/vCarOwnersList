import { Component, OnInit } from '@angular/core';
import { CarModel, OwnerModel } from '../../models';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getOwners } from '../../store/owners/selectors';
import { actions } from '../../store/owners';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.scss']
})
export class EditContainerComponent implements OnInit {

  public owner!: OwnerModel
  public ownerId!: string
  public ownerForm!: FormGroup
  public action!: string


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store$: Store
  ) {}

  private _createForm() {

    this.ownerForm = this.fb.group(
      {
        id: this.ownerId,
        lastName: new FormControl(this.owner.lastName || '', [Validators.required]),
        firstName: new FormControl(this.owner.firstName || '', [Validators.required]),
        middleName: new FormControl(this.owner.middleName || '', [Validators.required]),
        cars: new FormArray([])
      }
    )
  }

  ngOnInit() {

    this.route.url.subscribe(value => {
      this.action = value[0].path
      this.ownerId = value[1].path
    })

    this.store$.pipe(select(getOwners))
      .subscribe((value: any) => {
        this.owner = {...value.items?.filter((owner: OwnerModel) => owner.id === this.ownerId)[0]}
      })

    this._createForm()
    this.setCars(this.owner.cars)
  }

  get currentCars(): FormArray {
    return this.ownerForm.get('cars') as FormArray
  }

  setCars(cars: any) {
    const carsFGs = cars.map((car: any) => this.fb.group(car));
    const carsFormArray = this.fb.array(carsFGs);
    this.ownerForm.setControl('cars', carsFormArray)
  }

  addNewCar(){
    const newCar: CarModel = {
      id: Date.now().toString(),
      govNum: '',
      carBrand: '',
      carModel: '',
      prodYear: ''
    }
    this.owner.cars = [...this.owner.cars, newCar]
    this.currentCars.push(this.fb.group(newCar))
  }

  removeCar(carId: string) {
    this.owner.cars = this.owner.cars.filter((i: any) => i.id !== carId)
    return  this.owner.cars
  }

  editOwner() {
    this.store$.dispatch(actions.changeOwner({owner: this.ownerForm.value}))
  }

  show() {
    console.log(this.ownerForm.value)
  }

}
