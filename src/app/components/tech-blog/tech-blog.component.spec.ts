import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBlogComponent } from './tech-blog.component';

describe('TechBlogComponent', () => {
  let component: TechBlogComponent;
  let fixture: ComponentFixture<TechBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
