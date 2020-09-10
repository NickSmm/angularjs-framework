import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lykos',
  templateUrl: './lykos.component.html',
  styleUrls: ['./lykos.component.scss']
})
export class LykosComponent implements OnInit {
  transformForm: FormGroup = this.fb.group({
    contactName: ['', Validators.required],
    contactPhone: ['', Validators.required],
    driverList: this.fb.array([])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get driverList() {
    return this.transformForm.get('driverList') as FormArray;
  }
  addDriverInfo() {
    this.driverList.push(this.fb.group({
      driverName: ['', Validators.required],
      driverId: ['', Validators.required],
      driverPhone: ['', Validators.required],
      licensePlate: ['']
    }));
  }
  showValue() {
    console.log(this.transformForm.getRawValue());
  }
  setValue() {
    this.transformForm.patchValue({
      contactName: '名字',
      contactPhone: '手机',
      driverList: [
        {
          driverName: 12,
          driverId: 1234,
          driverPhone: 12345,
          licensePlate: 24234
        }
      ]
    });
  }
}
