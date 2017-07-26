import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {NotfoundComponent} from './notfound/notfound.component';
import {TodoListsService} from "../services/todo-lists.service";
import {EventEmitterService} from "../services/event-emitter.service"
import {DetailComponent} from "./detail/detail.component";
import {TodoListComponent} from './components/todo-gallery/todo-list/todo-list.component';
import {TodoGalleryComponent} from './components/todo-gallery/todo-gallery.component';
import {HttpModule} from "@angular/http";
import {CommonModule} from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list/:id', component: DetailComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    TodoListComponent,
    TodoGalleryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [TodoListsService, EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
