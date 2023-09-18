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
import {BsModalRef, BsModalService, ModalModule} from "ngx-bootstrap/modal";
import {CreateUserComponent} from "../create-user/create-user.component";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalModule ],
})

export class LoginPageComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  private destroyRef = inject(DestroyRef)
  private router = inject(Router)
  private modalService = inject(BsModalService);
  private bsModalRef: BsModalRef;

  ngOnInit(): void {
    this.initForm()
    this.loginForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
      console.log(value);
    })
  }

  public initForm(): void {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl(null, [Validators.required]),
      password: new UntypedFormControl(null, [Validators.required]),
    });
  }

  logIn() {
    this.router.navigate(['/main']);
  }

  createAccount() {
    this.bsModalRef = this.modalService.show(CreateUserComponent, {
      ignoreBackdropClick: true,
    });
  }
}
