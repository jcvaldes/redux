import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
    `a {
      cursor: pointer;
    }`
  ]
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }
  cambiarFiltro(nuevofiltro: fromFiltro.filtrosValidos) {
    if ( this.filtroActual === nuevofiltro) {
      return;
    }
    const accion = new fromFiltro.SetFiltroAction(nuevofiltro);
    this.store.dispatch(accion);
  }
  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => {
      return todo.completado === false;
    }).length;
  }
  borrarTodos() {
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(accion);
  }
}
