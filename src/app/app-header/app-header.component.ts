import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  constructor() {
  }

  @Output()
  startGameVar = new EventEmitter();

  @Output()
  endGameVar = new EventEmitter();

  startGame(): void{
    this.startGameVar.emit();
  }

  endGame(): void{
    this.endGameVar.emit();
  }

  jogador1(){
    return localStorage.getItem('Jogador1');
  }

  jogador2(){
    return localStorage.getItem('Jogador2');
  }
  
}
