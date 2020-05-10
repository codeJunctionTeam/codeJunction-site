import { Component, OnInit } from '@angular/core';
import blogs from '../../../assets/json/blogs.json';

@Component({
  selector: 'app-tech-blog',
  templateUrl: './tech-blog.component.html',
  styleUrls: ['./tech-blog.component.css']
})
export class TechBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  blogs: any = blogs;
}
