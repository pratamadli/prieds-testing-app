import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  goBackToMenu() {
    this.router.navigate(['/']);
  }
  changePage(path: string) {
    this.router.navigate([path]); // This will navigate to the specified path without adding '/' in front
  }
}
