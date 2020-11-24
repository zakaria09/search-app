import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private seachService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: new FormControl('', Validators.required)
    });
  }

  submit() {
    const { searchTerm } = this.searchForm.value;
    if (!this.searchForm.invalid && searchTerm.trim()) {
      this.router.navigate(['search-result', searchTerm]);
    }
  }
}
