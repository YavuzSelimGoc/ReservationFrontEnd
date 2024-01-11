import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from 'src/app/Services/business.service';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-business-public',
  templateUrl: './add-business-public.component.html',
  styleUrls: ['./add-business-public.component.scss']
})
export class AddBusinessPublicComponent implements OnInit{
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
      userName :["",Validators.required],
            businessName:["",Validators.required],
            businessPhoneNumber:["",Validators.required],
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
 console.log(localStorage.getItem('userName'))
    this.businessAddForm.controls['userName'].setValue(localStorage.getItem('userName'));
      this.businessAddForm.controls['businessImage'].setValue(this.resp.dbPath);
      if(this.businessAddForm.valid){
        let businessModel =Object.assign({},this.businessAddForm.value) 
        this.businessService.add(businessModel).subscribe(response=>{
          //localStorage.setItem('userType',"business")
          this.router.navigate(["/login"])
          this.toastrService.success("İşyeri Ekleme İşlemi Başarılı","Tebrikler")
        
        });
      }
      else {
        console.log("İşletme Eklenemedi");
          this.toastrService.error("İşyeri Ekleme İşlemi Başarısız","Hata")
      }  
     
    }
   
 
   uploadFinished = (event) => { 
     this.resp = event; 
   }
 
    createImgPath = (serverPath: string) => { 
     return environment.imgUrl+`${serverPath}`; 
     
   }
}
