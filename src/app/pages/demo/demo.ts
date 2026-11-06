import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  formData = {
    isClient: '',
    companyName: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    employees: '0-49',
    zipCode: '',
    phone: '',
    comments: '',
    subscribe: false
  };

  onSubmit() {
    console.log('Form Submitted', this.formData);
    // TODO: Hook up to your backend API here
  }
}
