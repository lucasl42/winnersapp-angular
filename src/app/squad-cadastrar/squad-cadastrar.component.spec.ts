import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadCadastrarComponent } from './squad-cadastrar.component';

describe('SquadCadastrarComponent', () => {
  let component: SquadCadastrarComponent;
  let fixture: ComponentFixture<SquadCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
