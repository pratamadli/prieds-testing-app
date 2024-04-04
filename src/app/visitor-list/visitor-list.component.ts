import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor, ApiResponse } from './visitor-list.model';
import { VisitorListService } from './visitor-list.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  displayedColumns: string[] = [
    'visitorNumber',
    'polyclinicName',
    'queueNumber',
  ];
  dataSource: ApiResponse[] = []; // Corrected line

  constructor(
    private router: Router,
    private visitorService: VisitorListService
  ) {}

  ngOnInit(): void {
    this.loadVisitors();
  }

  loadVisitors() {
    this.visitorService.getVisitorList().subscribe(
      (visitors) => {
        console.log('VISITOR LIST', visitors.data);
        this.dataSource = visitors.data;
      },
      (error) => {
        console.error('Error loading visitors:', error);
      }
    );
  }

  goBackToMenu() {
    this.router.navigate(['/']);
  }
}
