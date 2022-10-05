import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public sequencia: number[][] = [];
  public jogada: number;
  public contjogada: number;

  constructor() {
    this.sequencia = [[3,4,5],[6,7,8],[9,10,11]];
    this.jogada = 0;
    this.contjogada = 0;

  }



 jogar(botao: IonButton, l: number, c: number){
          this.sequencia[l][c]= this.jogada;
          this.contjogada++;

          if(this.jogada === 0){
              botao.color = 'warning';
              botao.disabled = true;
              this.jogada = 1;

              }else{
              botao.color = 'danger';
              botao.disabled =  true;
              this.jogada = 0;
              }
}
}
