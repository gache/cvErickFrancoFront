import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangagesAdminComponent } from './langages-admin.component';

describe('LangagesAdminComponent', () => {
  let component: LangagesAdminComponent;
  let fixture: ComponentFixture<LangagesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangagesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangagesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
