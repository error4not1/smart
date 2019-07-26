import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {CarouselModule} from "angular2-carousel";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent
    //CarouselSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // NgbModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
