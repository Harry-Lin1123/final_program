import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebNewsComponent } from './web-news.component';

describe('WebNewsComponent', () => {
  let component: WebNewsComponent;
  let fixture: ComponentFixture<WebNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
