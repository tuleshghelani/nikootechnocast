import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesusageComponent } from './industriesusage.component';

describe('IndustriesusageComponent', () => {
  let component: IndustriesusageComponent;
  let fixture: ComponentFixture<IndustriesusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesusageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
