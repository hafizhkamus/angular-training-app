import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvnisiListComponent } from './provnisi-list.component';

describe('ProvnisiListComponent', () => {
  let component: ProvnisiListComponent;
  let fixture: ComponentFixture<ProvnisiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvnisiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvnisiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
