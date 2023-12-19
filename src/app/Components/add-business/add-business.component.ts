import { BusinessService } from 'src/app/Services/business.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss']
})
export class AddBusinessComponent implements OnInit{
 businessAddForm:FormGroup;
  categories:Category[]
  isTrue:boolean
  public resp: {dbPath:''};
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private toastrService:ToastrService,
    private businessService:BusinessService,private router:Router) { }
  ngOnInit(): void {
   this.createBlogAddForm()
   this.getCategory()
   
  }
  createBlogAddForm(){
    this.businessAddForm=this.formBuilder.group({
      categoryId :["",Validators.required],
           businessName:["",Validators.required],
         businessAdress:["",Validators.required],
         businessImage:["",Validators.required],
       businessMinPrice:["",Validators.required],
		 businessMaxPrice:["",Validators.required],
		 businessShortDescription:["",Validators.required],
		 businessDescription:["",Validators.required],
    })
  }
  
  getCategory() {
    this.categoryService.getCategory().subscribe(repsonse => {
      this.categories = repsonse.data  
    })
  }
  add(){

 
     this.businessAddForm.controls['businessImage'].setValue(this.resp.dbPath);
     if(this.businessAddForm.valid){
       let businessModel =Object.assign({},this.businessAddForm.value) 
       this.businessService.add(businessModel).subscribe(response=>{
         this.router.navigate(["/admin/list-business"])
         this.toastrService.success("Blog Ekleme İşlemi Başarılı","Tebrikler")
       
       });
     }
     else {
       console.log("İşletme Eklenemedi");
         this.toastrService.error("Blog Ekleme İşlemi Başarısız","Hata")
     }  
    
   }
  

  uploadFinished = (event) => { 
    this.resp = event; 
  }

   createImgPath = (serverPath: string) => { 
    return environment.imgUrl+`${serverPath}`; 
    
  }

}
