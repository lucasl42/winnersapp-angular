import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsCadastrarComponent } from './ss-cadastrar.component';

describe('SsCadastrarComponent', () => {
  let component: SsCadastrarComponent;
  let fixture: ComponentFixture<SsCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
