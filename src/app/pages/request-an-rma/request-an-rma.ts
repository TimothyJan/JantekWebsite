import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Needed for the form

@Component({
  selector: 'app-request-an-rma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-an-rma.html',
  styleUrl: './request-an-rma.css',
})
export class RequestAnRma {

  // Placeholder for form submission
  onSubmit(form: any) {
    console.log('Form Submitted!', form);
    alert('Form submission is not connected to a backend yet.');
  }
}
