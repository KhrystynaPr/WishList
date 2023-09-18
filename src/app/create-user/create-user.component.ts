import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Router} from "@angular/router";

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

})
export class CreateUserComponent implements OnInit {
  public userForm: UntypedFormGroup;
  private destroyRef = inject(DestroyRef)
  private router = inject(Router)

  ngOnInit(): void {
    this.initForm()
    this.userForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
      console.log(value);
    })
  }

  public initForm(): void {
    this.userForm = new UntypedFormGroup({
      firstName: new UntypedFormControl(null, [Validators.required]),
      lastName: new UntypedFormControl(null, [Validators.required]),
      email: new UntypedFormControl(null, [Validators.required]),
      password: new UntypedFormControl(null, [Validators.required]),
      confirmPassword: new UntypedFormControl(null, [Validators.required]),
    });
  }

  createAccount() {
     this.router.navigate(['/main']);
  }
}
