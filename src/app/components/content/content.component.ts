import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //@ViewChild("tab1") tab1: any;
  @ViewChild("tab1") tab1!: ElementRef;
  @ViewChild("tab2") tab2!: ElementRef;
  @ViewChild("tab3") tab3!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  switchTab(event: any){
    let tab1 = this.tab1.nativeElement;
    let tab2 = this.tab2.nativeElement;
    let tab3 = this.tab3.nativeElement;

    if(event.tab == "tab1"){
      tab1.style.display = "block";
      tab2.style.display = "none";
      tab3.style.display = "none";
    }
    else if(event.tab == "tab2"){
      tab1.style.display = "none";
      tab2.style.display = "block";
      tab3.style.display = "none";
    }
    else if(event.tab == "tab3"){
      tab1.style.display = "none";
      tab2.style.display = "none";
      tab3.style.display = "block";
    }
  }

}
