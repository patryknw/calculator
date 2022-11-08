import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent implements OnInit {
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
