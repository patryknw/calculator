import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() text!: string;
  @Input() group!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
