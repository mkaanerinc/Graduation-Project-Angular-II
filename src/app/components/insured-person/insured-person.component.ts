import { Component, OnDestroy, OnInit } from '@angular/core';
import { InsuredPersonDetail } from 'src/app/models/insuredPersonDetail';
import { InsuredPersonService } from 'src/app/services/insured-person.service';

@Component({
  selector: 'app-insured-person',
  templateUrl: './insured-person.component.html',
  styleUrls: ['./insured-person.component.scss'],
})
export class InsuredPersonComponent implements OnInit {
  insuredPersons: InsuredPersonDetail[] = [];
  cols: any[] = [];
  first: number = 0;
  rows: number = 10;
  dataLoaded: boolean = false;

  constructor(private insuredPersonService: InsuredPersonService) {}

  ngOnInit(): void {
    this.getInsuredPersonDetails();

    this.cols = [
      { field: 'insuredPersonId', header: 'Sigortalı No' },
      { field: 'productName', header: 'Paket Adı' },
      { field: 'insuredPersonFirstName', header: 'Sigortalı Adı' },
      { field: 'insuredPersonLastName', header: 'Sigortalı Soyadı' },
      { field: 'orderPrice', header: 'Pirim Fiyatı' },
      { field: 'installmentOptionName', header: 'Vade Sayısı' },
      { field: 'orderStatusString', header: 'Sipariş Durumu' },
    ];
  }

  getInsuredPersonDetails() {
    this.insuredPersonService.getProductDetails().subscribe((response) => {
      this.insuredPersons = response.data;
      this.insuredPersons.forEach((element) => {
        if (element.orderStatus) {
          element.orderStatusString = 'Satın Alındı';
        } else {
          element.orderStatusString = 'Onay Bekliyor';
        }
      });
      this.dataLoaded = true;
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.insuredPersons
      ? this.first === this.insuredPersons.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.insuredPersons ? this.first === 0 : true;
  }
}
