import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  newAuthor: any = {};

  ngOnInit() {
  }

  addAuthor() {
    console.log('In add-author component');
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log('addAuthor data: ', data);
      this.newAuthor = data;
    })
    this._router.navigate(['/all'])
  }

}
