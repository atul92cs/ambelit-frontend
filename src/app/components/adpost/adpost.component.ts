import { Component, OnInit } from '@angular/core';
import {SubcategoryService} from '../../services/subcategory.service';
import {CategoryService} from '../../services/category.service';
@Component({
  selector: 'app-adpost',
  templateUrl: './adpost.component.html',
  styleUrls: ['./adpost.component.css']
})
export class AdpostComponent implements OnInit {
  Categories:any;
  Subcategories:any;
  constructor(private cService:CategoryService,private sService:SubcategoryService) { }

  ngOnInit() {
    this.getCategory();

  }
   getCategory()
   {
     this.cService.getCategory().subscribe(res=>{
       this.Categories=res;

     },err=>{

     });
   }
   getSubcategory(id:number)
   {
     if(id)
     {
       this.sService.getsubcategory(id).subscribe(res=>{
         this.Subcategories=res;
       },err=>{
           this.Subcategories=null;
       });
     }
     else
     {
       this.Subcategories=null;
     }
   }
}
