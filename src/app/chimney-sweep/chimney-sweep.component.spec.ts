import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneySweepComponent } from './chimney-sweep.component';

describe('ChimneySweepComponent', () => {
  let component: ChimneySweepComponent;
  let fixture: ComponentFixture<ChimneySweepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChimneySweepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChimneySweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
