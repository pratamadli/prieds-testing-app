import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(['/']);
  }
  changePage(path: string) {
    this.router.navigate([path]);
  }
}
