import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';
import { BusinessService } from 'src/app/Services/business.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Business } from 'src/app/models/business';


@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.scss']
})
export class UpdateBusinessComponent implements OnInit{
  businessUpdateForm:FormGroup
  sayac=0
  categories:Category[]
  business:Business;
  businessImage:string
  public resp: {dbPath:''};
  businessId:number
  constructor(private businessService:BusinessService,
    private formBuilder:FormBuilder,private categoryService:CategoryService,private activatedroute:ActivatedRoute,private router:Router) { this.createBusinessForm() }
    ngOnInit(): void {
      this.activatedroute.params.subscribe(params=>{
        if(params["businessId"]){
          this.businessId=params["businessId"]
          this.getBusinessById(params["businessId"])
          this.getCategory()
          }
        else{this.getBusinessById(params["businessId"])}
        this.businessId=params["businessId"]
        this.getCategory()

        })
    }
    getBusinessById(businessId:number){
      this.businessService.getBusinessById(businessId).subscribe((response) => {
        this.business=response.data;
        this.businessImage=this.business.businessImage
        this.createBusinessUpdateForm();
      });
    }
    getCategory() {
      this.categoryService.getCategory().subscribe(repsonse => {
        this.categories = repsonse.data  
      })
    }

    createBusinessForm(){
      this.businessUpdateForm=this.formBuilder.group({
        businessId :["",Validators.required],
        categoryId :["",Validators.required],
             businessName:["",Validators.required],
             businessPhoneNumber:["",Validators.required],
           businessAdress:["",Validators.required],
           businessImage:["",Validators.required],
         businessMinPrice:["",Validators.required],
       businessMaxPrice:["",Validators.required],
       businessShortDescription:["",Validators.required],
       businessDescription:["",Validators.required],
       businessStatus:["",Validators.required],

      })
    }

    updateBox()
    {
      Swal.fire({
        title:"Emin Misiniz",
        text:"Güncellemek İstediğinize Emin Misiniz ?",
        icon:"warning",
        showCancelButton:true,
        confirmButtonText:'Evet, Güncellensin',
        cancelButtonText:'Hayır, Güncellenmesin'
      }).then((result=>{
        if(result.value){
          Swal.fire("Güncellendi","Güncelleme işlemi başarılı","success")
          this.update();
         
        }
        else if (result.dismiss===Swal.DismissReason.cancel){
          Swal.fire("Güncellenmedi!","Güncelleme İşleminden Vazgeçildi","error")
        }
      }))
    }

    update(){
      if(this.sayac===0)
      { this.resp={
        dbPath:null
      }
      this.businessUpdateForm.controls['businessImage'].setValue(this.businessImage);
      if(this.businessUpdateForm.valid){
        let businessModel =Object.assign({},this.businessUpdateForm.value) 
        this.businessService.update(businessModel).subscribe(response=>{
          this.router.navigate(["/admin/list-business"])
          
        });
      }
      else {
        
      } }
      else if(this.sayac!==0){
        this.businessUpdateForm.controls['businessImage'].setValue(this.resp.dbPath);
      if(this.businessUpdateForm.valid){
        let businessModel =Object.assign({},this.businessUpdateForm.value) 
        this.businessService.update(businessModel).subscribe(response=>{
          this.router.navigate(["/admin/list-business"])
        });
      }
      else {} 
      }
     
    }

    createBusinessUpdateForm(){
      this.businessUpdateForm=this.formBuilder.group({
        businessId :[this.business.businessId],
        categoryId :[this.business.categoryId],
             businessName:[this.business.businessName],
             businessPhoneNumber:[this.business.businessPhoneNumber],
           businessAdress:[this.business.businessAdress],
           businessImage:[this.business.businessImage],
         businessMinPrice:[this.business.businessMinPrice],
       businessMaxPrice:[this.business.businessMaxPrice],
       businessShortDescription:[this.business.businessShortDescription],
       businessDescription:[this.business.businessDescription],
       businessStatus:[this.business.businessStatus],
      })
    }
    uploadFinished = (event) => { 
      this.sayac++
        this.resp = event; 
    }
  
     createImgPath = (serverPath: string) => { 
      return environment.imgUrl+`${serverPath}`; 
    }

    

}
