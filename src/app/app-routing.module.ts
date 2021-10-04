import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRedactComponent, MainComponent } from './components';
// import { EditContainerComponent, MainContainerComponent } from './containers';


// const routes: Routes = [
//   {path: '', component: MainContainerComponent},
//   {path: 'show/:id', component: EditContainerComponent},
//   {path: 'edit/:id', component: EditContainerComponent},
//   {path: 'add/:id', component: EditContainerComponent},
// ];
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'show/:id', component: CreateRedactComponent},
  {path: 'edit/:id', component: CreateRedactComponent},
  {path: 'add/:id', component: CreateRedactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
