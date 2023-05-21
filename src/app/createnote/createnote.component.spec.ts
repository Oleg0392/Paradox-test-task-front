import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteComponent } from './createnote.component';

describe('CreatenoteComponent', () => {
  let component: CreatenoteComponent;
  let fixture: ComponentFixture<CreatenoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenoteComponent]
    });
    fixture = TestBed.createComponent(CreatenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
