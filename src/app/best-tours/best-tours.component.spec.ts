import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestToursComponent } from './best-tours.component';

describe('BestToursComponent', () => {
  let component: BestToursComponent;
  let fixture: ComponentFixture<BestToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
