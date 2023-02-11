import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSideNavComponent } from './tutorial-side-nav.component';

describe('TutorialSideNavComponent', () => {
  let component: TutorialSideNavComponent;
  let fixture: ComponentFixture<TutorialSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
