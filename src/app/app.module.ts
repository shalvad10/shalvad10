import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { ToursListComponent } from './tours-list/tours-list.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { BookingComponent } from './booking/booking.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    SingleTourComponent,
    ToursListComponent,
    HeaderComponent,
    TopBarComponent,
    PreloaderComponent,
    BookingComponent,
    SearchBlockComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
