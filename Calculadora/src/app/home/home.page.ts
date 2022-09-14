/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public numeros: string;
    public lista: any;
    public grupo: Array<number> = [];
    public controle: number;

  constructor() {
    this.numeros = '';
  }

numero(valor: string){
  this.numeros = this.numeros + valor;
}

setLista(){
      this.setGrupo();
      if(this.lista == null){
        this.lista = this.numeros;
      }else{
        this.lista = this.lista + ' - ' + this.numeros;
      }
      this.numeros = '';
}
setGrupo(){
    this.grupo.push(parseFloat(this.numeros));
}
getCalcMaior(){
  let vm = 0;
  for (let i = 0; i < this.grupo.length; i++) {
    if(this.grupo[i] > vm){
      vm = this.grupo[i];
    }
  }
  this.lista = vm;
}
getOrdemC(){
  this.lista = '';
  let ordem = 0;
  for (let i = 0; i < this.grupo.length; i++){
      for (let j = 0; j < this.grupo.length; j++) {
        if(this.grupo[j] > this.grupo[i]){
          ordem = this.grupo[j];
          this.grupo[j] = this.grupo[i];
          this.grupo[i] = ordem;
        }
      }
  }
    for (let i = 0; i < this.grupo.length; i++) {
      this.lista += this.grupo[i]+' ';
    }
}


limparce(){
      const tm = this.numeros.length;
      this.numeros = this.numeros.substring(0,tm-1);
      const tm1 = this.lista.length;
      this.lista = this.lista.substring(0,tm1-1);
      this.lista = null;
}
limpar(){
  const tm1 = this.lista ='';
  const tm = this.numeros = '';
  this.lista = null;
  this.grupo.length=0; // codigo usado para zerar os valores dentro da array
}


}
