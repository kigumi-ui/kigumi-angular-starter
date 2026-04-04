import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ButtonComponent,
  CardComponent,
  IconComponent,
  InputComponent,
} from '@/components/ui';

@Component({
  selector: 'app-login-example',
  imports: [FormsModule, ButtonComponent, CardComponent, IconComponent, InputComponent],
  template: `
    <div class="wa-stack wa-justify-content-center wa-align-items-center">
      <k-card style="width: 400px; margin-top: 40px">
        <div class="wa-stack wa-gap-l">
          <form class="wa-stack wa-gap-m" (submit)="$event.preventDefault()">
            <k-input
              label="Username"
              type="text"
              [(ngModel)]="username"
              name="username"
            />
            <k-input
              label="Password"
              type="password"
              [passwordToggle]="true"
              [(ngModel)]="password"
              name="password"
            />

            @if (username) {
              <p class="wa-caption-s">
                Username: <strong>{{ username }}</strong>
              </p>
            }
            @if (password) {
              <p class="wa-caption-s">
                Password: <strong>{{ maskedPassword }}</strong>
              </p>
            }

            <div>
              <a href="#" class="wa-caption-s">Forgot password?</a>
            </div>

            <k-button variant="brand" size="medium">Sign In</k-button>
          </form>

          <div class="wa-cluster wa-justify-content-center wa-gap-2xs">
            <span class="wa-caption-s">OR</span>
          </div>

          <div class="wa-stack wa-gap-xs">
            <k-button appearance="outlined" size="medium">
              <k-icon slot="start" name="github" family="brands" />
              Continue with GitHub
            </k-button>
          </div>

          <div
            class="wa-caption-s"
            style="text-align: center; color: var(--wa-color-neutral-60)"
          >
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </k-card>
    </div>
  `,
})
export class LoginExampleComponent {
  username = '';
  password = '';

  get maskedPassword(): string {
    return '*'.repeat(this.password.length);
  }
}
