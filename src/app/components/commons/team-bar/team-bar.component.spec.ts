import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBarComponent } from './team-bar.component';

describe('TeamBarComponent', () => {
  let component: TeamBarComponent;
  let fixture: ComponentFixture<TeamBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
