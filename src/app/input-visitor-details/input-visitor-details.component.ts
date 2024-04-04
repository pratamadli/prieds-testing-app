import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from './input-visitor-details.service';
import { Visitor } from './input-visitor.details.model';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent {
  visitorData: Visitor = {
    firstName: '',
    lastName: '',
    idCard: '',
    birthDate: '', // Update birthDate to ISO string
    contactNumber: null,
    email: '',
    address: '',
    sex: '',
    height: null,
    weight: null,
    city: '',
    province: '',
    emergencyContactName: '',
    emergencyContactNumber: null,
  };

  constructor(private router: Router, private visitorService: VisitorService) {}

  registerVisitor() {
    console.log('RUN');
    this.visitorService.registerVisitor(this.visitorData).subscribe(
      (response) => {
        // Handle success
        console.log('Registration successful', response);
        if (response && response.data && response.data.visitorNumber) {
          alert(`SUCCESS this is yout Visitor Number: ${response.data.visitorNumber}`);
          this.router.navigate(['/request-queue-number'])
        } else {
          alert('Invalid response format from the server');
        }
      },
      (error) => {
        // Handle error
        console.error('Registration failed', error);
        if (error && error.message) {
          alert(`Registration failed: ${error.message}`);
        } else {
          alert('Failed to register visitor');
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }
  changePage(path: string) {
    this.router.navigate([path]);
  }
}
