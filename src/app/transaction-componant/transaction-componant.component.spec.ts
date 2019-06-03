import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponantComponent } from './transaction-componant.component';

describe('TransactionComponantComponent', () => {
  let component: TransactionComponantComponent;
  let fixture: ComponentFixture<TransactionComponantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionComponantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
