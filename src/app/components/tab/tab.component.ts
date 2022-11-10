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
  @Input() tab!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  setActive(){
    this.highlighted = true;
  }

  setInactive(){
    this.highlighted = false;
  }

  onClick(){
    console.log(this.tab);
    if(!this.highlighted) this.setActive();
  }

}
