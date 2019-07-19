import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AllAuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
