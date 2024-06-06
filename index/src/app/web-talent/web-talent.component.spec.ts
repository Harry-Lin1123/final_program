import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTalentComponent } from './web-talent.component';

describe('WebTalentComponent', () => {
  let component: WebTalentComponent;
  let fixture: ComponentFixture<WebTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebTalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
