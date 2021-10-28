import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

@Component({
  selector: 'app-cource',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  characters$: Observable<Character[]>;
  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<Character>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetName,
      characterAttributesMapping,
      'Active'
    );

}
