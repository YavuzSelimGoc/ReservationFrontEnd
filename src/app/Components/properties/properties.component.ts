import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { BusinessService } from 'src/app/Services/business.service';
import { BusinessDto } from './../../Models/businessDto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  businesses:BusinessDto[]
  categories:Category[]
  filtertext="";
  constructor(private businessService:BusinessService,private categoryService:CategoryService){ }
  ngOnInit(): void {
  this.getBusiness()
  this.getCategory()
  }

  getBusiness() {
    this.businessService.getBusinessActiveDto().subscribe(repsonse => {
      this.businesses = repsonse.data  
    })
  }
  getBusinessById(categoryId:number) {
    this.businessService.getBusinessDtoByCategoryId(categoryId).subscribe(repsonse => {
      this.businesses = repsonse.data  
    })
  }
  getCategory() {
    this.categoryService.getCategory().subscribe(repsonse => {
      this.categories = repsonse.data  
    })
  }
  createImgPath = (serverPath: string) => { 
    return environment.imgUrl+`${serverPath}`; 
  }

}
