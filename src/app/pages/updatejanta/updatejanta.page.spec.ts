import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejantaPage } from './updatejanta.page';

describe('UpdatejantaPage', () => {
  let component: UpdatejantaPage;
  let fixture: ComponentFixture<UpdatejantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejantaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
