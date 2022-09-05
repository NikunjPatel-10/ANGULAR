import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikungComponent } from './nikung.component';

describe('NikungComponent', () => {
  let component: NikungComponent;
  let fixture: ComponentFixture<NikungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NikungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
