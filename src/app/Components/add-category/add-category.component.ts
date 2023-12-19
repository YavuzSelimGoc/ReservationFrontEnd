import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  categoryAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private categoryService:CategoryService,private router:Router) { }
  ngOnInit(): void {
   this.createCategoryAddForm()
  }
  createCategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      categoryName:["",Validators.required],
      categoryDescription:["",Validators.required],
    })
  }
  add(){
    if(this.categoryAddForm.valid){
      let categoryModel =Object.assign({},this.categoryAddForm.value) 
      this.categoryService.add(categoryModel).subscribe(response=>{
        this.router.navigate(["/admin/list-category"])
        this.toastrService.success("Kategori Ekleme İşlemi Başarılı","Tebrikler")
        
      });
    }
    else {
      console.log("Kategori Eklenemedi");
      this.toastrService.error("Kategori Ekleme İşlemi Başarısız","Hata")
    } 
  }

}