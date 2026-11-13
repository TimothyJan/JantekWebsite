import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  openDropdowns: { [key: string]: boolean } = {};

  // Search State
  isSearchOpen = false;
  searchQuery = '';
  searchResults: any[] = [];

  // The Static Search Index (Sorted alphabetically by URL to match app.routes.ts)
  searchIndex = [
    { title: 'Home', desc: 'Jantek Electronics Workforce Management and Time & Attendance Solutions', url: '/' },
    { title: '831 to 832 Upgrade', desc: 'Software upgrade instructions for Jupiter versions 8.31 to 8.32', url: '/831_832_upgrade' },
    { title: 'About Us', desc: 'Learn about Jantek Electronics, our history since 1986, and our mission', url: '/about-us' },
    { title: 'Blogs', desc: 'Read the latest news, articles, and compliance updates from Jantek', url: '/blogs' },
    { title: 'California Consumer Privacy Act', desc: 'CCPA compliance information and employee rights', url: '/california_consumer_privacy_act' },
    { title: 'Clock Ethernet Upgrade', desc: 'Upgrade your older serial time clocks to Ethernet', url: '/clock_ethernet_upgrade' },
    { title: 'Contact Us', desc: 'Get in touch with our sales, support, or dealer teams', url: '/contact-us' },
    { title: 'Data Collection & Time Clocks', desc: 'Browse our wide variety of biometric and card-based time clocks', url: '/data-collection-time-clocks' },
    { title: 'Daylight Saving Time', desc: 'Information on how Jantek handles daylight saving time changes', url: '/daylight' },
    { title: 'Demo', desc: 'Request a live demonstration of our time and attendance software', url: '/demo' },
    { title: 'Electric Lock', desc: 'Electric lock hardware for access control systems', url: '/electriclock' },
    { title: 'FTP Merge', desc: 'Automated FTP data merging for distributed systems', url: '/ftpmerge' },
    { title: 'Government Solutions', desc: 'Time and attendance solutions for government agencies', url: '/government' },
    { title: 'Handkey Time Clock', desc: 'Handkey hand geometry biometric time clock', url: '/handkey' },
    { title: 'Healthcare Solutions', desc: 'Timekeeping and compliance solutions for healthcare', url: '/healthcare' },
    { title: 'Home 2', desc: 'Alternative home page layout and design', url: '/home-2' },
    { title: 'Hospitality Solutions', desc: 'Workforce management for hotels and restaurants', url: '/hospitality' },
    { title: 'Fingerprint Time Clock Info', desc: 'Information on Jantek fingerprint biometric readers', url: '/infofinger' },
    { title: 'Hand Punch Info', desc: 'Information on hand geometry biometric readers', url: '/infohand' },
    { title: 'JTA-100 Info', desc: 'Information on the JTA-100 time clock series', url: '/infojta100' },
    { title: 'JTA-150 Info', desc: 'Information on the JTA-150 time clock series', url: '/infojta150' },
    { title: 'JTA-250 Info', desc: 'Information on the JTA-250 time clock series', url: '/infojta250' },
    { title: 'JTA-250 AWID', desc: 'JTA-250 with AWID long-range proximity reader', url: '/infojta250-awid' },
    { title: 'JTA-250 HID Info', desc: 'JTA-250 with HID proximity reader specifications', url: '/infojta250-hid' },
    { title: 'JTA-250 ioProx', desc: 'JTA-250 with ioProx reader technology', url: '/infojta250-ioprox' },
    { title: 'JTA-250 Mifare', desc: 'JTA-250 with Mifare smart card reader', url: '/infojta250-mifare' },
    { title: 'JTA-250 SecuraKey', desc: 'JTA-250 with SecuraKey reader', url: '/infojta250-securakey' },
    { title: 'JTA-550 Info', desc: 'Information on the JTA-550 biometric time clock', url: '/infojta550' },
    { title: 'Access Control Systems', desc: 'Jantek security and access control systems', url: '/jantek-access-control-security-system' },
    { title: 'Jupiter Client/Server Version', desc: 'Enterprise-grade client/server time and attendance software', url: '/jantek-jupiter-client-server-version-time-and-attendance-software' },
    { title: 'Jupiter Small Business Edition', desc: 'Affordable timekeeping software for small businesses under 100 employees', url: '/jantek-jupiter-small-business-edition-time-and-attendance-software' },
    { title: 'Jupiter Standard Version', desc: 'Timekeeping software designed for standard business needs', url: '/jantek-jupiter-standard-version-time-and-attendance-software' },
    { title: 'Jantek Jupiter Time & Attendance System', desc: 'Overview of the core Jupiter Time & Attendance system', url: '/jantek-jupiter-time-and-attendance-system' },
    { title: 'Jantek Jupiter Web Time SaaS', desc: 'Web-based time and attendance software as a service', url: '/jantek-jupiter-web-time-time-and-attendance-saas-software' },
    { title: 'Jantek PC Punch', desc: 'Punch in and out directly from a Windows PC', url: '/jantek-pc-punch' },
    { title: 'Product Brochures', desc: 'Download PDF brochures and technical specifications for our products', url: '/jantek-product-brochures' },
    { title: 'Time & Attendance Add-on Modules', desc: 'Optional modules to extend the functionality of your timekeeping software', url: '/jantek-time-and-attendance-add-on-modules' },
    { title: 'Job Costing / Tracking', desc: 'Track labor costs by job, department, or project', url: '/jobcosting' },
    { title: 'JPT-724 Standalone Bell Timer', desc: 'Hardware bell timer for managing schedules and breaks', url: '/jpt-724-standalone-bell-timer' },
    { title: 'JTA-250 HID Time Clock', desc: 'Proximity card reader time clock by HID', url: '/jta250-hid-time-clock' },
    { title: 'JTA-250 Rosslare Face Reader', desc: 'Biometric facial recognition time clock', url: '/jta250-rosslare-face-reader-time-clock' },
    { title: 'JTA-550 Rosslare Temperature Scanner', desc: 'Face reader time clock with built-in thermal temperature scanning', url: '/jta550-rosslare-time-clock-with-temperature-scanner' },
    { title: 'Manufacturing Solutions', desc: 'Job costing and time tracking for manufacturers', url: '/manufacturing' },
    { title: 'Merge Module', desc: 'Merge data from multiple time clocks or locations', url: '/mergemodule' },
    { title: 'NJ Paid Sick Leave Act', desc: 'Information for New Jersey customers regarding paid sick leave', url: '/nj-paid-sick-leave-act-for-new-jersey-customers' },
    { title: 'Payroll Interfaces', desc: 'Integrate Jantek timekeeping with over 200 payroll providers', url: '/payroll-interfaces' },
    { title: 'Payroll Based Journal (PBJ)', desc: 'Compliance solution for nursing homes and healthcare facilities', url: '/payroll-based-journal' },
    { title: 'Payrolls', desc: 'Information on payroll integrations and processing', url: '/payrolls' },
    { title: 'PC-Based Access Control', desc: 'Access control software running on standard PCs', url: '/pcbased_accesscontrol' },
    { title: 'Phone Punch', desc: 'Clock in and out using an interactive voice response (IVR) phone system', url: '/phonepunch' },
    { title: 'Privacy Policy & BIPA', desc: 'Our privacy policy and Biometric Information Privacy Act compliance', url: '/privacy-policy-and-bipa-policy' },
    { title: 'Products', desc: 'View our complete catalog of Time and Attendance products', url: '/products' },
    { title: 'Request an RMA', desc: 'Submit a Return Merchandise Authorization for repairs', url: '/request-an-rma' },
    { title: 'Requirements', desc: 'System requirements for running Jantek software', url: '/requirements' },
    { title: 'Retail Solutions', desc: 'Time and attendance for retail stores and supermarkets', url: '/retail' },
    { title: 'Return on Investment (ROI)', desc: 'Calculate the ROI of implementing a time and attendance system', url: '/return-on-investment' },
    { title: 'Standalone Bell Timer', desc: 'JPT-724 standalone bell timer for schools and factories', url: '/standalone' },
    { title: 'Time & Attendance Software Features', desc: 'Explore the powerful features of Jantek timekeeping software', url: '/time-and-attendance-software' },
    { title: 'Time Recorder', desc: 'Legacy time recorder hardware and software solutions', url: '/timerecorder' },
    { title: 'Web Time Cloud-Based SaaS', desc: 'Fully online cloud-based timekeeping and scheduling software', url: '/web-time-cloud-based-saas-timekeeping' },
    { title: 'Web Merge', desc: 'Web-based module for merging timeclock data', url: '/webmerge' },
    { title: 'Pay Data', desc: 'Export time and attendance data to payroll systems', url: '/webpaydata' },
    { title: 'Web Punch', desc: 'Web-based time clock software for employees', url: '/webpunch' },
    { title: 'Web Punch CS', desc: 'Web-based time clock for client/server environments', url: '/webpunchcs' },
    { title: 'Web Reports', desc: 'Generate and view time and attendance reports via the web', url: '/webreports' },
    { title: 'Web Timecards', desc: 'Edit employee timecards remotely using any web browser', url: '/webtimecards' },
    { title: 'Wireless Web Punch', desc: 'Clock in and out using a web-enabled cellular phone', url: '/wirelesswebpunch' }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(id: string) {
    this.openDropdowns[id] = !this.openDropdowns[id];
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
      this.searchResults = [];
    }
  }

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      return;
    }
    const query = this.searchQuery.toLowerCase();
    this.searchResults = this.searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  }

  goToResult(url: string) {
    this.router.navigate([url]);
    this.toggleSearch(); // Close search overlay on navigation
  }
}
