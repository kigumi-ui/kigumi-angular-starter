import { Component } from '@angular/core';
import { LoginExampleComponent } from '../components/examples/login-example.component';

@Component({
  selector: 'app-root',
  imports: [LoginExampleComponent],
  template: `<app-login-example />`
})
export class App {}
