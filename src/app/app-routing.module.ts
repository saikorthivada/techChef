import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AustronautInformationComponent } from './austronaut-information/austronaut-information.component';
import { AppComponent } from './app.component';
import { AustronautsListComponent } from './austronauts-list/austronauts-list.component';

const routes: Routes = [
  {
    path: '',
    component: AustronautsListComponent
  },
  {
    path: 'astronaut',
    component: AustronautInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
