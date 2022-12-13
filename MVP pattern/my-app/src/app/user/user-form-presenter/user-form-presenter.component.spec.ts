import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPresenterComponent } from './user-form-presenter.component';

describe('UserFormPresenterComponent', () => {
  let component: UserFormPresenterComponent;
  let fixture: ComponentFixture<UserFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormPresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
