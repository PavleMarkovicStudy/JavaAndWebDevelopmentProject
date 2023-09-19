import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Animation Module needed for modals to show
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Module imports for PrimeNg
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';

import { ApiLogAndTestComponent } from './api-log-and-test/api-log-and-test.component';
import { CityPickerComponent } from './city-picker/city-picker.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiLogAndTestComponent,
    CityPickerComponent,
    LocationCardComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  // after importing modules they have to be decalred here
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OverlayPanelModule,
    TooltipModule,
    DividerModule,
    ButtonModule,
    ToastModule,
    DragDropModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    CardModule,
    DialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
