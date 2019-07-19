import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: 'all', component: AllAuthorsComponent},
  { path: 'add', component: AddAuthorComponent},
  { path: 'edit/:id', component: EditAuthorComponent},
  //{ path: 'gamma/:id', component: GammaComponent },

  { path: '', pathMatch: 'full', redirectTo: '/all' },

  { path: '**', component: AddAuthorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
