import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentmanagmentSystem';



   courseImages: string[] = [
    // '/assets/courseCards/businessAnalysist.png',
   '/assets/courseCards/mernStack.jpeg',
    '/assets/courseCards/dataAnalysis.jpg',
    // 'assets/images/angular.png'
  ];
}
