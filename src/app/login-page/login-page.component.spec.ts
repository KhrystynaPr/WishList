import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';

xdescribe('LoginPageComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [LoginPageComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
