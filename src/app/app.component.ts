import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  @Input()
  value1 = '';
  @Input()
  value2 = '';
  @Input()
  value3 = '';
  @Input()
  value4 = '';
  @Input()
  value5 = '';
  @Input()
  value6 = '';
  @Input()
  value7 = '';
  @Input()
  value8 = '';
  @Input()
  value9 = '';
  
  i = 2;
  simbolo = 'O';
  text = "\n";

  startGame(): void {
    this.text += "Vez do jogador 1. Clique aonde ficará o X\n";
  }

  endGame(): void{
    localStorage.setItem('Jogador1', '0');
    localStorage.setItem('Jogador2', '0');
    this.cleanDatas()
  }

  trocarValor(): void {
    if(this.i == 2){
      this.i = 1;
      this.simbolo = 'X';
    } else {
      this.i = 2;
      this.simbolo = 'O';
    }
  }
  
  cleanDatas(): void {
    this.value1 = '';
    this.value2 = '';
    this.value3 = '';
    this.value4 = '';
    this.value5 = '';
    this.value6 = '';
    this.value7 = '';
    this.value8 = '';
    this.value9 = '';
    this.text =  'Nova Partida'  + "\n";
  }

  valor(valor){
    let toAceppt = true; 
    switch(valor){
      case '1': if(this.value1 == ''){this.value1 = this.simbolo} else {toAceppt = false};  break;
      case '2': if(this.value2 == ''){this.value2 = this.simbolo} else {toAceppt = false};  break;
      case '3': if(this.value3 == ''){this.value3 = this.simbolo} else {toAceppt = false};  break;
      case '4': if(this.value4 == ''){this.value4 = this.simbolo} else {toAceppt = false};  break;
      case '5': if(this.value5 == ''){this.value5 = this.simbolo} else {toAceppt = false};  break;
      case '6': if(this.value6 == ''){this.value6 = this.simbolo} else {toAceppt = false};  break;
      case '7': if(this.value7 == ''){this.value7 = this.simbolo} else {toAceppt = false};  break;
      case '8': if(this.value8 == ''){this.value8 = this.simbolo} else {toAceppt = false};  break;
      case '9': if(this.value9 == ''){this.value9 = this.simbolo} else {toAceppt = false};  break;
    }
    if(toAceppt){
      if((this.value1 == this.value2 && this.value2 == this.value3 && this.value3 != '') ||
        (this.value4 == this.value5 && this.value5 == this.value6 && this.value6 != '') ||
        (this.value7 == this.value8 && this.value8 == this.value9 && this.value9 != '') ||
        (this.value1 == this.value4 && this.value4 == this.value7 && this.value7 != '') ||
        (this.value2 == this.value5 && this.value5 == this.value8 && this.value8 != '') ||
        (this.value3 == this.value6 && this.value6 == this.value9 && this.value9 != '') ||
        (this.value1 == this.value5 && this.value5 == this.value9 && this.value9 != '') || 
        (this.value3 == this.value5 && this.value5 == this.value7 && this.value7 != '')){
          let num = localStorage.getItem('Jogador' + this.i);
          localStorage.setItem('Jogador' + this.i, ''+ (parseInt(num) + 1));
          this.cleanDatas();
          this.text += "Ganhador = " + this.i + "\n";
      } else if (this.value1 != '' &&this.value2 != '' && this.value3 != '' && this.value4 != '' &&
      this.value5 != '' &&this.value6 != '' && this.value7 != '' &&this.value8 != '' &&this.value9 != ''){
        this.cleanDatas();
        this.text += "Empate\n";
      } else {
        this.trocarValor();
        this.text += 'Vez do Jogador ' + this.i + "\n";
      }
    }
}

}
