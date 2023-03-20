import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumHeaderComponent } from './medium-header.component';

describe('MediumHeaderComponent', () => {
  let component: MediumHeaderComponent;
  let fixture: ComponentFixture<MediumHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
