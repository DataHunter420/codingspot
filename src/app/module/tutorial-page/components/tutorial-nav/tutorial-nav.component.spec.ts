import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialNavComponent } from './tutorial-nav.component';

describe('TutorialNavComponent', () => {
  let component: TutorialNavComponent;
  let fixture: ComponentFixture<TutorialNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
