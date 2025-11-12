import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksEdit } from './ebooks-edit';

describe('EbooksEdit', () => {
  let component: EbooksEdit;
  let fixture: ComponentFixture<EbooksEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbooksEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbooksEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
