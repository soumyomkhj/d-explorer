import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cource',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  goToContent(category: string, content: string){
    this.router.navigate(['/step'], { queryParams: { category: category, content: content } });
  }

}
