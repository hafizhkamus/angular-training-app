import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabupatenListComponent } from './kabupaten-list.component';

describe('KabupatenListComponent', () => {
  let component: KabupatenListComponent;
  let fixture: ComponentFixture<KabupatenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabupatenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabupatenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
