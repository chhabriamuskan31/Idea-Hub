import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumContentComponent } from './medium-content.component';

describe('MediumContentComponent', () => {
  let component: MediumContentComponent;
  let fixture: ComponentFixture<MediumContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
