import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedworksComponent } from './relatedworks.component';

describe('RelatedworksComponent', () => {
  let component: RelatedworksComponent;
  let fixture: ComponentFixture<RelatedworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
