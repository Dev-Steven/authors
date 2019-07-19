import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
EditAuthorComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Favorite Authors';
  authors: any = {};

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    
  }

  allAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log('all authors: ',data)
      this.authors = data;
    })
  }

}


