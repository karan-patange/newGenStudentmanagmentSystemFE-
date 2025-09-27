import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  showForm: boolean = false;
logos: string[] = [
    'assets/logo1.png',
    'assets/logo2.png',
    'assets/logo3.png',
    'assets/logo4.png',
    'assets/logo5.png',
    'assets/logo6.png',
    'assets/logo7.png',
    'assets/logo8.png',
  ];

  currentIndex: number = 0;
  transformStyle: string = 'translateX(0)';
  interval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex += 3; // slide 3 logos at a time
      if (this.currentIndex >= this.logos.length) {
        this.currentIndex = 0; // loop back to start
      }
      this.transformStyle = `translateX(-${this.currentIndex * 160}px)`; 
      // 150px width + 10px margin
    }, 3000); // change slide every 3 seconds
  }

}
