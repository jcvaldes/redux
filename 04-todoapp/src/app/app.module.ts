import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todo/todo.reducer';
import { environment } from '../environments/environment.prod';
import { FilterPipe } from './filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
 //  StoreModule.forRoot({ todos: todoReducer }),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
