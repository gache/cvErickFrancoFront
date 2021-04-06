import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeAdminComponent } from './diplome-admin.component';

describe('DiplomeAdminComponent', () => {
  let component: DiplomeAdminComponent;
  let fixture: ComponentFixture<DiplomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
