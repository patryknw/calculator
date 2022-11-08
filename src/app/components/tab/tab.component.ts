import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() text!: string;
  @Input() highlighted!: boolean;
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
