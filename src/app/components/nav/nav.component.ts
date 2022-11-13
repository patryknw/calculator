import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {  
  @Output() receiveTab = new EventEmitter();
  @ViewChildren(TabComponent) children!:QueryList<TabComponent>;
  
  constructor() { }

  ngOnInit(): void {
  }

  getTab(event: any){
    this.children.forEach((element) => element.setInactive());
    this.receiveTab.emit({ event:event, tab:event.tab });
  }

}
