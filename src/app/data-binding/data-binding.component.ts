import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
nomeDoCurso = 'Angular';


  constructor() {
  }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCursoAngular(): boolean {
    return true;
  }

  botaoClicado(): void {
    alert('Botão clicado!');
  }


  // tslint:disable-next-line:typedef
  onKeyUp($event: KeyboardEvent) {
    this.valorAtual = ($event.target as HTMLInputElement).value;
  }


  // tslint:disable-next-line:typedef
  salvarValor({value}: { value: any }) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }
}
