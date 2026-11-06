import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import this

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // 1. Define all 5 industries
  allIndustries = [
    { name: 'Government', image: '/assets/images/Government-Time-and-Attendance-Workforce-Management-Solution.jpg' },
    { name: 'Healthcare', image: '/assets/images/Workforce-Management-for-Healthcare.jpg' },
    { name: 'Hospitality', image: '/assets/images/Workforce-Management-for-Hospitality-1.jpg' },
    { name: 'Manufacturing', image: '/assets/images/Workforce-Management-Manufacturing-1.jpg' },
    { name: 'Retail', image: '/assets/images/Workforce-Management-for-Retail-Supermarkets.jpg' }
  ];

  // 2. State for the carousel
  startIndex = 0;
  visibleCount = 4;
  visibleIndustries: any[] = [];

  ngOnInit() {
    this.updateVisibleIndustries();
  }

  updateVisibleIndustries() {
    this.visibleIndustries = [];
    for (let i = 0; i < this.visibleCount; i++) {
      const index = (this.startIndex + i) % this.allIndustries.length;
      this.visibleIndustries.push(this.allIndustries[index]);
    }
  }

  nextIndustry() {
    this.startIndex = (this.startIndex + 1) % this.allIndustries.length;
    this.updateVisibleIndustries();
  }

  prevIndustry() {
    this.startIndex = (this.startIndex - 1 + this.allIndustries.length) % this.allIndustries.length;
    this.updateVisibleIndustries();
  }
}
