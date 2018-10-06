import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMapsComponent } from './projects-maps.component';

describe('ProjectsMapsComponent', () => {
  let component: ProjectsMapsComponent;
  let fixture: ComponentFixture<ProjectsMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
