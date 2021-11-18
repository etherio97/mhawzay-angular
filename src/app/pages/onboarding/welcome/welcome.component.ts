import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  storeName = '';

  categories = [
    'Automotive',
    'Baby & Toddler',
    'Clothing & Shoes',
    'Computers',
    'Electronics',
    'Entertainment & Arts',
    'Food & Gifts',
    'Health & Beauty',
    'Home & Garden',
    'Office & Professional Services',
    'Personal & Home Services',
    'Restaurants & Dining',
    'Software',
    'Sports & Outdoors',
    'Travel',
  ];

  constructor() {}

  ngOnInit(): void {}
}
