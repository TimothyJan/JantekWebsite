import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // 1. Define all 5 industries with their routes
  allIndustries = [
    { name: 'Government', route: '/government', image: 'assets/images/Government-Time-and-Attendance-Workforce-Management-Solution.jpg' },
    { name: 'Healthcare', route: '/healthcare', image: 'assets/images/Workforce-Management-for-Healthcare.jpg' },
    { name: 'Hospitality', route: '/hospitality', image: 'assets/images/Workforce-Management-for-Hospitality-1.jpg' },
    { name: 'Manufacturing', route: '/manufacturing', image: 'assets/images/Workforce-Management-Manufacturing-1.jpg' },
    { name: 'Retail', route: '/retail', image: 'assets/images/Workforce-Management-for-Retail-Supermarkets.jpg' }
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
