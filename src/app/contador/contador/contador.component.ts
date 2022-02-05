import { Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <div>Hola Mundo</div>
    <h3>La base es: {{base}}</h3>

    <button (click)="acumular(base)"> + {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(- base)"> - {{base}}</button>

    `
})

export class ContadorComponent{
    title: string = 'bases';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor:number){
      this.numero += valor;
    }
}