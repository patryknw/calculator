import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild("tab1") tab1!: ElementRef;
  @ViewChild("tab2") tab2!: ElementRef;
  @ViewChild("tab3") tab3!: ElementRef;
  @ViewChild("blacha1") blacha1!: ElementRef;
  @ViewChild("blacha2") blacha2!: ElementRef;
  @ViewChild("tortownica1") tortownica1!: ElementRef;
  @ViewChild("tortownica2") tortownica2!: ElementRef;

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

  switchTrayType(event: any){
    let blacha1 = this.blacha1.nativeElement;
    let blacha2 = this.blacha2.nativeElement;
    let tortownica1 = this.tortownica1.nativeElement;
    let tortownica2 = this.tortownica2.nativeElement;
    
    if(event.group == "foremka1"){
      if(event.text == "blacha"){
        blacha1.style.display = "flex";
        tortownica1.style.display = "none";
      } else if(event.text == "tortownica"){
        blacha1.style.display = "none";
        tortownica1.style.display = "flex";
      }
    }
    else if(event.group == "foremka2"){
      if(event.text == "blacha"){
        blacha2.style.display = "flex";
        tortownica2.style.display = "none";
      } else if(event.text == "tortownica"){
        blacha2.style.display = "none";
        tortownica2.style.display = "flex";
      }
    }
  }

}
