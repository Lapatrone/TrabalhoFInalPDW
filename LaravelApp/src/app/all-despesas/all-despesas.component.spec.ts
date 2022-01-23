import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDespesasComponent } from './all-despesas.component';

describe('AllDespesasComponent', () => {
  let component: AllDespesasComponent;
  let fixture: ComponentFixture<AllDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDespesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
