import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { HeaderInterceptor } from './interceptors/token.interceptor';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { OfficersListComponent } from './officers-list/officers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    CompanyDetailComponent,
    OfficersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
