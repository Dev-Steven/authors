import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  authors: any = {};

  ngOnInit() {
    this.allAuthors();
  }

  allAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('all authors: ')
      this.authors = data;
    })
  }

  deleteAuthor(id: String) {
    console.log(`id: ${id}`);
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('deleted');
    })
    this.allAuthors();
  }

}
