import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {

  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];

   private svg;
   private margin = 50;
   private width = 750 - (this.margin * 2);
   private height = 400 - (this.margin * 2);

   // method create svg
   private createSvg() : void {
     this.svg = d3.select("figure#bar")
     .append("svg")
     .attr("width", this.width + (this.margin * 2))
     .attr("height", this.height + (this.margin * 2))
     .append("g")
     .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
   }

  constructor() { }

  ngOnInit(): void {
  }

}
