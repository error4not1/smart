import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
//import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path:'registrationform',component:RegistrationformComponent}
  //{path:'carousel-slide',component:CarouselSlideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
