import { HttpService } from './../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  id: String = "";
  author: any = {};
  updatedAuthor: any = {};

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id']
    });
    this.getAuthor();
    // this.editAuthor(this.updatedAuthor);
  }

  // This function will get the name of the author the user wants to edit
  getAuthor() {
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe( data => {
      console.log('Found the author.', data)
      this.author = data;
    })
  }

  // This function will change the name of the current author
  editAuthor() {
    console.log('Id in editAuthor(): ', this.id);
    console.log('New author', this.updatedAuthor);
    let observable = this._httpService.editAuthor(this.id, this.updatedAuthor);
    observable.subscribe(data => {
      console.log('data: ', data);
    })
    this._router.navigate(['/all']);
  }

}
