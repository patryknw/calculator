import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TextboxComponent } from '../textbox/textbox.component';

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
  @ViewChild("ratio") ratio!: ElementRef;
  @ViewChild("ratio_long") ratio_long!: ElementRef;
  @ViewChildren(TextboxComponent) textboxes!:QueryList<TextboxComponent>;

  activeTab1: string = "blacha";
  activeTab2: string = "tortownica";
  elements: any[] = [];

  selectedProduct!: any;
  selectedWeightUnit1!: any;
  selectedWeightUnit2!: any;
  selectedVolumeUnit1!: any;
  selectedVolumeUnit2!: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let i = 0;
    this.textboxes.forEach((element) => {
      this.elements[i] = element;
      i++;
    });
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
        this.activeTab1 = "blacha";
        this.convertUnits(undefined, "blacha1_dlugosc", this.elements[11].returnNumber());
      } else if(event.text == "tortownica"){
        blacha1.style.display = "none";
        tortownica1.style.display = "flex";
        this.activeTab1 = "tortownica";
        this.convertUnits(undefined, "tortownica1_srednica", this.elements[13].returnNumber());
      }
    }
    else if(event.group == "foremka2"){
      if(event.text == "blacha"){
        blacha2.style.display = "flex";
        tortownica2.style.display = "none";
        this.activeTab2 = "blacha";
        this.convertUnits(undefined, "blacha2_dlugosc", this.elements[14].returnNumber());
      } else if(event.text == "tortownica"){
        blacha2.style.display = "none";
        tortownica2.style.display = "flex";
        this.activeTab2 = "tortownica";
        this.convertUnits(undefined, "tortownica2_srednica", this.elements[16].returnNumber());
      }
    }
  }

  convertUnits(event?: any, idExternal?: any, numberExternal?: number){
    let number, id;

    if(event === undefined){
      number = numberExternal;
      id = idExternal;
    } else{
      number = event.number;
      id = event.id;
    }

    number = parseFloat(number);

    let ratio = this.ratio.nativeElement;
    let ratio_long = this.ratio_long.nativeElement;

    let ratioNumber!: number;
    let myTraySize!: number;
    let recipeTraySize!: number;

    switch(id){
      case "mililitr":
        this.elements[2].setNumber(number / 5);
        this.elements[3].setNumber(number / 15);
        this.elements[4].setNumber(number / 250);
        if(this.selectedProduct !== undefined){
          this.elements[1].setNumber(number / this.selectedProduct.oneUnitInMillilitres);
        }
        break;
      case "gram":
        if(this.selectedProduct === undefined) return;
        let toMillilitres = number * this.selectedProduct.oneUnitInMillilitres;
        this.elements[0].setNumber(toMillilitres);
        this.elements[2].setNumber(toMillilitres / 5);
        this.elements[3].setNumber(toMillilitres / 15);
        this.elements[4].setNumber(toMillilitres / 250);
        break;
      case "lyzeczka":
        this.elements[0].setNumber(number * 5);
        this.elements[3].setNumber(number * 5 / 15);
        this.elements[4].setNumber(number * 5 / 250);
        if(this.selectedProduct !== undefined){
          this.elements[1].setNumber(number / this.selectedProduct.oneUnitInMillilitres * 5);
        }
        break;
      case "lyzka":
        this.elements[0].setNumber(number * 15);
        this.elements[2].setNumber(number * 15 / 5);
        this.elements[4].setNumber(number * 15 / 250);
        if(this.selectedProduct !== undefined){
          this.elements[1].setNumber(number / this.selectedProduct.oneUnitInMillilitres * 15);
        }
        break;
      case "szklanka":
        this.elements[0].setNumber(number * 250);
        this.elements[2].setNumber(number * 250 / 5);
        this.elements[3].setNumber(number * 250 / 15);
        if(this.selectedProduct !== undefined){
          this.elements[1].setNumber(number / this.selectedProduct.oneUnitInMillilitres * 250);
        }
        break;

      case "ilosc1":
        if(this.selectedWeightUnit1 === undefined || this.selectedWeightUnit2 === undefined) return;
        this.elements[6].setNumber(number * this.selectedWeightUnit1.oneUnitInGrams / this.selectedWeightUnit2.oneUnitInGrams);
        break;
      case "ilosc2":
        if(this.selectedWeightUnit1 === undefined || this.selectedWeightUnit2 === undefined) return;
        this.elements[5].setNumber(number * this.selectedWeightUnit2.oneUnitInGrams / this.selectedWeightUnit1.oneUnitInGrams);
        break;
      case "ilosc3":
        if(this.selectedVolumeUnit1 === undefined || this.selectedVolumeUnit2 === undefined) return;
        this.elements[8].setNumber(number * this.selectedVolumeUnit1.oneUnitInMillilitres / this.selectedVolumeUnit2.oneUnitInMillilitres);
        break;
      case "ilosc4":
        if(this.selectedVolumeUnit1 === undefined || this.selectedVolumeUnit2 === undefined) return;
        this.elements[7].setNumber(number * this.selectedVolumeUnit2.oneUnitInMillilitres / this.selectedVolumeUnit1.oneUnitInMillilitres);
        break;
      case "celsjusz":
        this.elements[10].setNumber(number * 1.8 + 32);
        break;
      case "fahrenheit":
        this.elements[9].setNumber((number - 32) * 0.5556);
        break;

      function calculateRatioNumber(activeTab1: string, activeTab2: string, elements: any){
        if(activeTab1 == "blacha"){
          myTraySize = elements[11].returnNumber() * elements[12].returnNumber();
        }
        else if(activeTab1 == "tortownica"){
          myTraySize = Math.PI * Math.pow((elements[13].returnNumber() / 2), 2);
        }
        if(activeTab2 == "blacha"){
          recipeTraySize = elements[14].returnNumber() * elements[15].returnNumber();
        }
        else if(activeTab2 == "tortownica"){
          recipeTraySize = Math.PI * Math.pow((elements[16].returnNumber() / 2), 2);
        }

        ratioNumber = myTraySize / recipeTraySize;
      }

      case "blacha1_dlugosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
      case "blacha1_szerokosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
      case "tortownica1_srednica":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
      case "blacha2_dlugosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
      case "blacha2_szerokosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
      case "tortownica2_srednica":
        calculateRatioNumber(this.activeTab1, this.activeTab2, this.elements);
        break;
    }

    ratioNumber = Math.round(ratioNumber * 100) / 100;
    if(!isNaN(ratioNumber)){
      if(ratioNumber > 1){
        ratio.textContent = `${ratioNumber} razy więcej`;
        ratio_long.textContent = `Do foremki powinieneś włożyć ${ratioNumber} razy więcej składników, niż w przepisie.`;
      }
      else if(ratioNumber < 1){
        ratioNumber = Math.round((recipeTraySize / myTraySize) * 100) / 100;
        ratio.textContent = `${ratioNumber} razy mniej`;
        ratio_long.textContent = `Do foremki powinieneś włożyć ${ratioNumber} razy mniej składników, niż w przepisie.`;
      }
      else if(ratioNumber == 1){
        ratio.textContent = `${ratioNumber}`;
        ratio_long.textContent = `Do foremki powinieneś włożyć taką samą liczbę składników, jak w przepisie.`;
      }
    }
  }

  setChoiceValue(event: any){
    switch(event.id){
      case "products":
        this.selectedProduct = event.selected;
        if(!isNaN(this.elements[0].returnNumber())){
          this.convertUnits(undefined, "mililitr", this.elements[0].returnNumber());
        } else if(!isNaN(this.elements[1].returnNumber())){
          this.convertUnits(undefined, "gram", this.elements[1].returnNumber());
        }
        break;
      case "weightUnits1":
        this.selectedWeightUnit1 = event.selected;
        this.convertUnits(undefined, "ilosc1", this.elements[5].returnNumber());
        break;
      case "weightUnits2":
        this.selectedWeightUnit2 = event.selected;
        this.convertUnits(undefined, "ilosc1", this.elements[5].returnNumber());
        break;
      case "volumeUnits1":
        this.selectedVolumeUnit1 = event.selected;
        this.convertUnits(undefined, "ilosc3", this.elements[7].returnNumber());
        break;
      case "volumeUnits2":
        this.selectedVolumeUnit2 = event.selected;
        this.convertUnits(undefined, "ilosc3", this.elements[7].returnNumber());
        break;
    }
  }

}
