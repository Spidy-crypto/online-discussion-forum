import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyforumComponent } from './myforum.component';

describe('MyforumComponent', () => {
  let component: MyforumComponent;
  let fixture: ComponentFixture<MyforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
