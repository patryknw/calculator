import { Component, OnInit, Input } from '@angular/core';
import 'select2';

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

  ngAfterViewInit(){
    $('.js-example-basic-single').select2({
      placeholder: this.text,
      allowClear: true,
      ajax: {
        dataType: "json",
        url: "assets/json/products.json"
      }
    });
  }

}
