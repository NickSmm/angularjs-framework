import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LykosComponent } from './lykos.component';

describe('LykosComponent', () => {
  let component: LykosComponent;
  let fixture: ComponentFixture<LykosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LykosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LykosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
