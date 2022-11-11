import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() tabClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setActive(){
    this.highlighted = true;
  }

  setInactive(){
    this.highlighted = false;
  }

  onClick(event: any){
    if(!this.highlighted){
      this.tabClick.emit({ event:event, tab:this.tab });
      this.setActive();
    }
  }

}
