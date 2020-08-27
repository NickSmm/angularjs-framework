import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {Observable, fromEvent} from 'rxjs';
import {debounceTime, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'myAngular';
  fun: any;
  inputValue: string = 'test';
  inputValue1: string = 'test';
  @ViewChildren('test')
  // testInputs: QueryList<ElementRef>;
  // constructor(private elementRef: ElementRef) {
  // }
  @ViewChild('test', {static: true})
  testInput: ElementRef;

  ngOnInit(): void {
    console.log(1111);
  }

  ngAfterViewInit(): void {
    // this.testDebounce();
  }

  ngOnDestroy(): void {
    this.fun.unsubscribe();
  }

  testDebounce = () => {
    this.fun = fromEvent(this.testInput.nativeElement, 'keyup').pipe(debounceTime(1000)).subscribe(x => {
      console.log(this.inputValue);
    });
    //console.log(this.testInputs);
  };
}
