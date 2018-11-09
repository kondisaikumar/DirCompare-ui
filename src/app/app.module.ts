import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { CompareComponent } from './compare/compare.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { RestService } from './restservice/restService';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [{path: '', component: DirectoryComponent}, {path: 'compare', component: CompareComponent}];
@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
