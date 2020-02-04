import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MeasurementsService } from './services/measurements.service';
import { CountriesService } from './services/countries.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,LeafletModule.forRoot()],
  declarations: [ AppComponent, HelloComponent, MapComponent, FilterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MeasurementsService, CountriesService]
})
export class AppModule { }
