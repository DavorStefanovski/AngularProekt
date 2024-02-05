import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaglavieComponent } from './zaglavie.component';

describe('ZaglavieComponent', () => {
  let component: ZaglavieComponent;
  let fixture: ComponentFixture<ZaglavieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZaglavieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZaglavieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
