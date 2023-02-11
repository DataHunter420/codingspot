import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPageFooterComponent } from './tutorial-page-footer.component';

describe('TutorialPageFooterComponent', () => {
  let component: TutorialPageFooterComponent;
  let fixture: ComponentFixture<TutorialPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialPageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
