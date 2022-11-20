import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent implements OnInit {
  @Input() text!: string;
  @Input() type!: string;
  @Output() emitChoice = new EventEmitter();

  public droplistType!: any;
  public selected!: number;

  public products = [
    { id: 1, name: "Mąka", oneUnitInMillilitres: 1.9 },
    { id: 2, name: "Miód", oneUnitInMillilitres: 0.7 },
    { id: 3, name: "Cukier", oneUnitInMillilitres: 1.2 }
  ];

  public weightUnits = [
    { id: 1, name: "miligram", oneUnitInGrams: 0.001 },
    { id: 2, name: "gram", oneUnitInGrams: 1 },
    { id: 3, name: "dekagram", oneUnitInGrams: 10 },
    { id: 4, name: "kilogram", oneUnitInGrams: 100 },
    { id: 5, name: "uncja (oz)", oneUnitInGrams: 28.3495 },
    { id: 6, name: "funt (lb)", oneUnitInGrams: 453.592 },
    { id: 7, name: "peck (US dry) (pk)", oneUnitInGrams: 8809.7676 },
    { id: 8, name: "kwarta (US dry) (qt)", oneUnitInGrams: 1101.22095 }
  ];

  public volumeUnits = [
    { id: 1, name: "mililitr", oneUnitInMillilitres: 1 },
    { id: 2, name: "litr", oneUnitInMillilitres: 1000 }, 
    { id: 3, name: "uncja (oz)", oneUnitInMillilitres: 28.4131 },
    { id: 4, name: "pinta (pt)", oneUnitInMillilitres: 568.261 },
    { id: 5, name: "kwarta (qt)", oneUnitInMillilitres: 1136.52 },
    { id: 6, name: "galon (gal)", oneUnitInMillilitres: 4546.09 },
    { id: 7, name: "uncja amerykańska (oz)", oneUnitInMillilitres: 29.5735 },
    { id: 8, name: "pinta amerykańska (pt)", oneUnitInMillilitres: 473.176 },
    { id: 9, name: "kwarta amerykańska (qt)", oneUnitInMillilitres: 946.3529 },
    { id: 10, name: "galon amerykański (gal)", oneUnitInMillilitres: 3785.41 }
  ];

  constructor() { }

  ngOnInit(): void {
    switch(this.type){
      case "products":
        this.droplistType = this.products;
        break;
      case "weightUnits":
        this.droplistType = this.weightUnits;
        break;
      case "volumeUnits":
        this.droplistType = this.volumeUnits;
        break;
    }
  }

  getChoice(event: any){
    this.emitChoice.emit( {event:event, choice:this.selected} );
  }

}
