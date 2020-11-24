import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  $results: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private seachService: SearchService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const term = params['term'];
        this.$results = this.getResults(term);
   });
  }

  getResults(term) {
    return this.seachService.searchCompany(term);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
