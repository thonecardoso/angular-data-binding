import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;


  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCursoAngular(): boolean {
    return true;
  }
}
