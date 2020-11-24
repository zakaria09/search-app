import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-officers-list',
  templateUrl: './officers-list.component.html',
  styleUrls: ['./officers-list.component.scss']
})
export class OfficersListComponent implements OnInit {

  companyNumber: string;
  officersInfo: any;
  $companyInfo: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const number = params['number'];
        this.companyNumber = number;
        this.getOfficersInfo(number);
        this.$companyInfo = this.searchService.searchCompany(number);
    });
  }

  getOfficersInfo(number) {
    return this.searchService.searchOfficers(number)
      .pipe(
        pluck('items')
      )
      .subscribe(response => this.officersInfo = response);
  }

  goBack() {
    this.location.back();
  }
}
