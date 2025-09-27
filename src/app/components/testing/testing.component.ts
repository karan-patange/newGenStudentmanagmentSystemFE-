import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('countAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('numberAnimation', [
      transition('* => *', [
        style({ width: 0 }),
        animate('2s ease-out', style({ width: '*' })),
      ]),
    ]),
  ]
})


export class TestingComponent implements OnInit {
 stats = [
    { label: 'Student Trained', value: 10000, formattedValue: '10k+' },
    { label: 'Hiring Companies', value: 3000, formattedValue: '3,000+' },
    { label: 'Highest Salary Drawn', value: 35, formattedValue: '35 LPA' },
    { label: 'Training Conducted', value: 600, formattedValue: '600hrs' }
  ];

  ngOnInit() {
    this.startCounting();
  }

  startCounting() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.stats.forEach(stat => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              stat.formattedValue = start >= end ? stat.formattedValue : start.toLocaleString();
              if (start >= end) {
                clearInterval(timer);
              }
            }, stepTime);
          });
          obs.unobserve(entry.target);
        }
      });
    }, options);

    const target = document.querySelector('.stats-section');
    if (target) {
      observer.observe(target);
    }
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'active') {
      console.log('Animation completed for', event.element);
    }
  }

}
