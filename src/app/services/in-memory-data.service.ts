import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(): {}  {
    return {
      owners: [
        {
          id: '1',
          firstName: 'Overlord',
          middleName: 'Of Peace',
          lastName: 'Stephenson',
          cars: [
            {
              id: '1',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model S',
              prodYear: '2019'
            },
            {
              id: '2',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model 3',
              prodYear: '2019'
            },
            {
              id: '3',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model X',
              prodYear: '2019'
            },
          ]
        },
        {
          id: '2',
          firstName: 'Dean',
          middleName: 'Thomas',
          lastName: 'Morgan',
          cars: [
            {
              id: '4',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model Y',
              prodYear: '2019'
            }
          ]
        },
        {
          id: '3',
          firstName: 'Lui',
          middleName: 'C',
          lastName: 'K',
          cars: [
            {
              id: '5',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model Y',
              prodYear: '2019'
            }
          ]
        },
        {
          id:'4',
          firstName: 'Bruce',
          middleName: 'Thomas',
          lastName: 'Wane',
          cars: [
            {
              id: '6',
              govNum: 'VL1996ST',
              carBrand: 'Tesla',
              carModel: 'Model Y',
              prodYear: '2019'
            }
          ]
        },
      ]
    };
  }
}
