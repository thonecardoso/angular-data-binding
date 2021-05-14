import {Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements AfterViewInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef;


  incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(): void {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.campoValorInput);
  }



}
