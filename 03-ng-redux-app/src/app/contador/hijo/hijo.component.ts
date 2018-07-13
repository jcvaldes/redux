import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  ngOnInit() {}

  multiplicar() {
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }
  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
    // this.cambioContador.emit(this.contador);
  }
  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
