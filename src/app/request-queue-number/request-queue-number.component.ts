import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QueueService } from './request-queue-number.service';
import { Queue } from './request-queue-number.model';
@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent {
  queueData: Queue = {
    visitorNumber: '',
    payment: '',
    polyclinicCode: '',
  };
  constructor(private router: Router, private queueService: QueueService) {}
  ngOnInit(): void {}
  printQueue() {
    console.log('RUN PRINT QUEUE');
    this.queueService.printQueue(this.queueData).subscribe(
      (response) => {
        console.log('Registration successful', response);
        if (response && response.data && response.data.token) {
          // Open a new window or pop up for printing
          const ticketContent = `
          <h2>Queue Ticket</h2>
          <p>Token: ${response.data.token}</p>
          <p>Timestamp: ${response.data.createdAt}</p>
          <div style="text-align: center;">
	<img alt="Aspose Barcode"
		 src="https://products.aspose.app/barcode/embed/image.Png?BarcodeType=DatabarExpanded&Content=${response.data.token}&Height=101&Width=313" />
</div>
<div style="text-align:center;">
	<!-- Link to Aspose Barcode is required -->
	<a href="https://products.aspose.app/barcode/" title="Aspose Barcode" target="_blank">
		Aspose Barcode
	</a>
</div>
        `;
          const printWindow = window.open('', '_blank');
          printWindow.document.write(ticketContent);
          printWindow.document.close();
          printWindow.print();
        } else {
          console.error('Invalid response format from the server');
        }
      },
      (error) => {
        // Handle error
        console.error('Queue failed', error);
        if (error && error.message) {
          alert(`Failed to queue, your data is already in queue or you have not yet registered `);
        } else {
          alert('Queue to register visitor');
        }
      }
    );
  }
  goBackToMenu() {
    this.router.navigate(['/']);
  }
  changePage(path: string) {
    this.router.navigate([path]); // This will navigate to the specified path without adding '/' in front
  }
}
