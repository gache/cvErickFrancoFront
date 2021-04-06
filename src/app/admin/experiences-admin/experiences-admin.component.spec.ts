import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesAdminComponent } from './experiences-admin.component';

describe('ExperiencesAdminComponent', () => {
  let component: ExperiencesAdminComponent;
  let fixture: ComponentFixture<ExperiencesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
