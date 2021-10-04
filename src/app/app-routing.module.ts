import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditContainerComponent, MainContainerComponent } from './containers';


const routes: Routes = [
  {path: '', component: MainContainerComponent},
  {path: 'show/:id', component: EditContainerComponent},
  {path: 'edit/:id', component: EditContainerComponent},
  {path: 'add/:id', component: EditContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
