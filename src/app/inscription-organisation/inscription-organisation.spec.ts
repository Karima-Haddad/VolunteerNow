import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionOrganisation } from './inscription-organisation';

describe('InscriptionOrganisation', () => {
  let component: InscriptionOrganisation;
  let fixture: ComponentFixture<InscriptionOrganisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionOrganisation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionOrganisation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
