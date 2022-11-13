import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() text!: string;
  @Input() group!: string;
  @Input() checked!: boolean;
  @ViewChild("radio") radio!: ElementRef;
  @Output() radioClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let radio = this.radio.nativeElement;
    if(this.checked) radio.checked = true;
  }

  onClick(event: any){
    this.radioClick.emit({ event:event, group:this.group, text:this.text });
  }

}
