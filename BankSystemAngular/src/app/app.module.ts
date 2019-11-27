import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDialogModule,
      MatToolbarModule, MatInputModule, MatTooltipModule, MatBadgeModule, MatSelectModule,
      MatOptionModule, MatListModule, MatDatepickerModule, MatBottomSheetModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientDetailComponent } from './add-client-detail/add-client-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ViewClientDetailComponent } from './view-client-detail/view-client-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AddClientDetailComponent,
    ViewClientDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
