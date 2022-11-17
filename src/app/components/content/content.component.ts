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
        this.activeTab1 = "blacha";
      } else if(event.text == "tortownica"){
        blacha1.style.display = "none";
        tortownica1.style.display = "flex";
        this.activeTab1 = "tortownica";
      }
    }
    else if(event.group == "foremka2"){
      if(event.text == "blacha"){
        blacha2.style.display = "flex";
        tortownica2.style.display = "none";
        this.activeTab2 = "blacha";
      } else if(event.text == "tortownica"){
        blacha2.style.display = "none";
        tortownica2.style.display = "flex";
        this.activeTab2 = "tortownica";
      }
    }
  }

  convertUnits(event: any){
    let number = parseFloat(event.number);
    let elements: any[] = [];
    let i = 0;

    let ratio = this.ratio.nativeElement;
    let ratio_long = this.ratio_long.nativeElement;

    let ratioNumber!: number;
    let myTraySize!: number;
    let recipeTraySize!: number;

    this.textboxes.forEach((element) => {
      elements[i] = element;
      i++;
    });

    switch(event.id){
      case "mililitr":
        elements[2].setNumber(number / 5);
        elements[3].setNumber(number / 15);
        elements[4].setNumber(number / 250);
        break;
      case "gram":
        break;
      case "lyzeczka":
        elements[0].setNumber(number * 5);
        elements[3].setNumber(number * 5 / 15);
        elements[4].setNumber(number * 5 / 250);
        break;
      case "lyzka":
        elements[0].setNumber(number * 15);
        elements[2].setNumber(number * 15 / 5);
        elements[4].setNumber(number * 15 / 250);
        break;
      case "szklanka":
        elements[0].setNumber(number * 250);
        elements[2].setNumber(number * 250 / 5);
        elements[3].setNumber(number * 250 / 15);
        break;

      case "ilosc1":
        break;
      case "ilosc2":
        break;
      case "celsjusz":
        elements[10].setNumber(number * 1.8 + 32);
        break;
      case "fahrenheit":
        elements[9].setNumber((number - 32) * 0.5556);
        break;

      function calculateRatioNumber(activeTab1: string, activeTab2: string){
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
        calculateRatioNumber(this.activeTab1, this.activeTab2);
        break;
      case "blacha1_szerokosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2);
        break;
      case "tortownica1_srednica":
        calculateRatioNumber(this.activeTab1, this.activeTab2);
        break;
      case "blacha2_dlugosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2);
        break;
      case "blacha2_szerokosc":
        calculateRatioNumber(this.activeTab1, this.activeTab2);
        break;
      case "tortownica2_srednica":
        calculateRatioNumber(this.activeTab1, this.activeTab2);
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

}
