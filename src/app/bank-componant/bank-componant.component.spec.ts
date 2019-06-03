import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankComponantComponent } from './bank-componant.component';

describe('BankComponantComponent', () => {
  let component: BankComponantComponent;
  let fixture: ComponentFixture<BankComponantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankComponantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
