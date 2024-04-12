import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInfoListComponent } from './result-info-list.component';

describe('ResultInfoListComponent', () => {
  let component: ResultInfoListComponent;
  let fixture: ComponentFixture<ResultInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
