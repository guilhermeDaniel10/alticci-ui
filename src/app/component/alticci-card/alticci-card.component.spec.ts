import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlticciCardComponent } from './alticci-card.component';

describe('AlticciCardComponent', () => {
  let component: AlticciCardComponent;
  let fixture: ComponentFixture<AlticciCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlticciCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlticciCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
