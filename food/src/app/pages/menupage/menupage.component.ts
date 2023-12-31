import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss'],
})
export class MenupageComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailService
  ) {}
  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
    }
  }
}
