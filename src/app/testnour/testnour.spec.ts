import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testnour } from './testnour';

describe('Testnour', () => {
  let component: Testnour;
  let fixture: ComponentFixture<Testnour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testnour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testnour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
