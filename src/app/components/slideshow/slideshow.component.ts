import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
 images: string[] = [
    'assets/images/slide-2.png',
    'assets/images/slideshow-1.png',
    
  ];

  currentIndex = 0;
  autoPlaySub!: Subscription;
  isPaused = false;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlaySub = interval(3000).subscribe(() => {
      if (!this.isPaused) {
        this.next();
      }
    });
  }

  stopAutoPlay() {
    if (this.autoPlaySub) {
      this.autoPlaySub.unsubscribe();
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }
}
