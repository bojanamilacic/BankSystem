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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewClientDetailComponent } from './view-client-detail/view-client-detail.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConnectionApiService } from './api/connection-api.service';
import { AuthInterceptor } from './auth/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AddClientDetailComponent,
    ViewClientDetailComponent,
    LoginComponent,
    UserRegistrationComponent,
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
    MatNativeDateModule,
    ToastrModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [MatDatepickerModule, ConnectionApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
