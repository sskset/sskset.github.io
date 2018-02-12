import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckRequestComponent } from './check-request/check-request.component';

import { RouterModule, Routes } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { KeysPipe } from './pipes/KeysPipe';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from 'primeng/datatable';

const appRoutes: Routes = [
  { path: 'check-request', component: CheckRequestComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    CheckRequestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    DeviceDetectorModule.forRoot(),
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
