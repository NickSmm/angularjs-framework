import {Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {Observable, fromEvent} from 'rxjs';
import {debounceTime, throttleTime} from 'rxjs/operators';
import {CommonService} from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private commonService: CommonService) {
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
