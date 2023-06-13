import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceUiComponent } from './source-ui.component';

describe('SourceUiComponent', () => {
  let component: SourceUiComponent;
  let fixture: ComponentFixture<SourceUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SourceUiComponent]
    });
    fixture = TestBed.createComponent(SourceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
