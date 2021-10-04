import { Component, OnInit } from '@angular/core';
import { ICarOwnerServiceService } from '../../services';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { actions } from '../../store/owners';
import { getOwners } from '../../store/owners/selectors';
import { OwnerModel } from '../../models';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  public data!: OwnerModel[]
  public id?: string

  constructor(
    public helper: ICarOwnerServiceService,
    private router: Router,
    private store$: Store
  ) { }

  ngOnInit(): void {

    this.store$.dispatch(actions.loadOwners())

    this.store$.pipe(select(getOwners))
      .subscribe((value:any) => {
        this.data = value.items
      })
  }

  sendId(id: string) {
    this.id = id
  }

  addNewOwner() {

    const newOwner: OwnerModel = this.helper.createOwner('',
      '','',
      {
        id: Date.now().toString(),
        govNum: '',
        carBrand: '',
        carModel: '',
        prodYear: ''
      })

    this.store$.dispatch(actions.addOwner({owner: newOwner}))

  }

  actionWithOwner(action: string) {
    if (this.id) {
      switch (action) {

        case 'show':
          this.router.navigate([`show/${this.id}`])
          break;

        case 'edit':
          this.router.navigate([`edit/${this.id}`])
          break;

        default:
          null
          break;
      }
    }
  }

  removeOwner() {
    this.store$.dispatch(actions.removeOwner({id: this.id!}))
  }

}
