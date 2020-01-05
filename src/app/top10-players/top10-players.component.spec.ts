import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10PlayersComponent } from './top10-players.component';

describe('Top10PlayersComponent', () => {
  let component: Top10PlayersComponent;
  let fixture: ComponentFixture<Top10PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10PlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
