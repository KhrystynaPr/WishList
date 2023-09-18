import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateUserComponent } from './create-user.component';

xdescribe('LoginPageComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [CreateUserComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
