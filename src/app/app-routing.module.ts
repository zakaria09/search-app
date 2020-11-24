import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { OfficersListComponent } from './officers-list/officers-list.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search-result/:term', component: SearchResultComponent },
  { path: 'company-detail/:number', component: CompanyDetailComponent },
  { path: 'officers-list/:number', component: OfficersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
