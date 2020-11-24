import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { pluck } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

  companyInfo: any;
  companyNumber: string;

  constructor(
    private route: ActivatedRoute,
    private seachService: SearchService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const number = params['number'];
        this.companyNumber = number;
        this.getInfo(number);
    });
  }

  ngOnDestroy() {

  }

  getInfo(number) {
    return this.seachService.searchCompany(number)
      .pipe(
        pluck('items')
      )
      .subscribe(response => this.companyInfo = response);
  }

  goBack() {
    this.location.back();
  }
}
