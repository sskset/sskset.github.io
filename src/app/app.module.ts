import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckRequestComponent } from './check-request/check-request.component';

import { RouterModule, Routes } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { KeysPipe } from './pipes/KeysPipe';

const appRoutes: Routes = [
  { path: 'check-request', component: CheckRequestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    CheckRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
