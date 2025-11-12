import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksAdd } from './ebooks-add';

describe('EbooksAdd', () => {
  let component: EbooksAdd;
  let fixture: ComponentFixture<EbooksAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbooksAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbooksAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
