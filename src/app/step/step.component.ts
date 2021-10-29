import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  category = '';
  content = '';

  pageData: any;

  toolImages = [
    {
      "id": "ai",
      "icon": "../../assets/img/tools/ai.png"
    },
    {
      "id": "xd",
      "icon": "../../assets/img/tools/xd.png"
    },
    {
      "id": "cd",
      "icon": "../../assets/img/tools/cd.png"
    },
    {
      "id": "ps",
      "icon": "../../assets/img/tools/ps.webp"
    },
    {
      "id": "is",
      "icon": "../../assets/img/tools/is.png"
    }
  ];

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParams().then(() => this.fetchData());
  }

  getParams() {
    return new Promise<void>((resolve) => {
      this.route.queryParams.subscribe(params => {
        this.category = params.category;
        this.content = params.content;
        resolve();
      })
    })
  }

  fetchData(){
    const location = `assets/data/${this.category}/${this.content}.json`;
    this.get(location).subscribe(data => {
      this.pageData = data;
    });
  }

  getToolImg(tool){
    const obj = this.toolImages.find(x => x.id === tool);
    return obj.icon;
  }

  get(location){
    const data = this.http.get(location);
    return data;
  }

  videoThumbnail(url){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    const id = (match&&match[7].length==11)? match[7] : false;
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

}
