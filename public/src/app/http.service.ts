import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getAuthors() {
    console.log('In service')
    return this._http.get('/authors');
  }

  addAuthor(newAuthor) {
    console.log('In service. New Author: ', newAuthor);
    return this._http.post('/authors/new', newAuthor);
  }

  deleteAuthor(id) {
    console.log('In service. ID:', id);
    return this._http.delete(`authors/delete/${id}`);
  }

}
