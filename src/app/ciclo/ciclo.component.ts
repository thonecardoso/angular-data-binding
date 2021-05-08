import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() valorInicial = 10;

  constructor() {
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
