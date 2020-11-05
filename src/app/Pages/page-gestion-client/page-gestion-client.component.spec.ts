import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionClientComponent } from './page-gestion-client.component';

describe('PageGestionClientComponent', () => {
  let component: PageGestionClientComponent;
  let fixture: ComponentFixture<PageGestionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGestionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
