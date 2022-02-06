import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglagesPage } from './reglages.page';

describe('ReglagesPage', () => {
  let component: ReglagesPage;
  let fixture: ComponentFixture<ReglagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
