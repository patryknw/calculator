import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchTab(){
    /*
    if(tab == tab1){
      tab1.display = "block";
      tab2.display = "none";
      tab3.display = "none";
    }
    else if(tab == tab2){
      tab1.display = "none";
      tab2.display = "block";
      tab3.display = "none";
    }
    else if(tab == tab3){
      tab1.display = "none";
      tab2.display = "none";
      tab3.display = "block";
    }
    */
  }

}
