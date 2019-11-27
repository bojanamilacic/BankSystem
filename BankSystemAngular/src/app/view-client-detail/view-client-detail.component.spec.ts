import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientDetailComponent } from './view-client-detail.component';

describe('ViewClientDetailComponent', () => {
  let component: ViewClientDetailComponent;
  let fixture: ComponentFixture<ViewClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
