import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel, OwnerModel } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ICarOwnerServiceService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }


  getAllOwners(): Observable<any>{

    return this.http.get(`owners`)
  }

  createOwner(
    lastName: string,
    firstName: string,
    middleName: string,
    cars: CarModel
  ) {

    const newOwner: OwnerModel = {
      id: Date.now().toString(),
      lastName: lastName,
      firstName: firstName,
      middleName: middleName,
      cars: [cars]
    }

    this.router.navigate([`add/${newOwner.id}`])

    return newOwner
  }
}
