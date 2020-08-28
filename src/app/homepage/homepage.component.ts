import { Component, OnInit, Optional, Self } from '@angular/core';
import {CommonService} from '../service/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

}
