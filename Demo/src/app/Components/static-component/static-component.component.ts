import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-component',
  templateUrl: './static-component.component.html',
  styleUrls: ['./static-component.component.css']
})
export class StaticComponentComponent implements OnInit {
  data: any
  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.data = data;
    })
  }
}
