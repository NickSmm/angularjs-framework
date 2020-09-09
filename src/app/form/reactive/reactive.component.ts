import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  contactInfoForm: FormGroup = new FormGroup({
    contactName: new FormControl('', { updateOn: 'blur',  validators: [Validators.required]}),
    contactPhone: new FormControl(''),
    driverList: new FormArray([
      new FormControl('')
    ])
  });
  traderInfoForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    id: [''],
    workLocationList: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get workLocationList() {
    return this.traderInfoForm.get('workLocationList') as FormArray;
  }

  addWorkLocation() {
    this.workLocationList.push(this.fb.control(''));
  }

}
