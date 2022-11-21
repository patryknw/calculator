import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() text!: string;
  @Input() id!: string;
  @Output() emitNumber = new EventEmitter();
  @ViewChild("textbox") textbox!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber(event: any, number: string){
    if(event.key === ".") return;
    this.emitNumber.emit({ event:event, number:number, text:this.text, id:this.id });
  }

  setNumber(number: number){
    if(isNaN(number)) return;
    let numberRounded = Math.round(number * 100) / 100;
    this.textbox.nativeElement.value = numberRounded;
  }

  returnNumber(){
    return parseFloat(this.textbox.nativeElement.value);
  }

}
