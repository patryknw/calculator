import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent implements OnInit {
  @Input() text!: string;
  @Input() type!: string;
  @Input() id!: string;
  @Output() emitChoice = new EventEmitter();

  public droplistItems!: any;
  public selected!: number;

  private productsJson = 'assets/json/products.json';
  private weightUnitsJson = 'assets/json/weightUnits.json';
  private volumeUnitsJson = 'assets/json/volumeUnits.json';

  public products!: any;
  public weightUnits!: any;
  public volumeUnits!: any;

  constructor(private http: HttpClient){
    this.getProductsJson().subscribe(data => {
      this.products = data;
    });
    this.getWeightUnitsJson().subscribe(data => {
      this.weightUnits = data;
    });
    this.getVolumeUnitsJson().subscribe(data => {
      this.volumeUnits = data;
    });
  }

  public getProductsJson(): Observable<any> {
    return this.http.get(this.productsJson);
  }

  public getWeightUnitsJson(): Observable<any> {
    return this.http.get(this.weightUnitsJson);
  }

  public getVolumeUnitsJson(): Observable<any> {
    return this.http.get(this.volumeUnitsJson);
  }

  ngOnInit(): void {
    switch(this.type){
      case "products":
        setTimeout(() => {
          this.droplistItems = this.products.products;
        }, 500);
        break;
      case "weightUnits":
        setTimeout(() => {
          this.droplistItems = this.weightUnits.weightUnits;
        }, 500);
        break;
      case "volumeUnits":
        setTimeout(() => {
          this.droplistItems = this.volumeUnits.volumeUnits;
        }, 500);
        break;
    }
  }

  getChoice(event: any){
    this.emitChoice.emit({ event:event, selected:this.selected, id:this.id });
  }

}
