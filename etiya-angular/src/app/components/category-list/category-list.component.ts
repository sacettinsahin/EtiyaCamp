import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList!:Category[];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCategories();
    }, 1000);
    
  }

  getCategories(){
    this.categoriesService.getList().subscribe((response) =>{
      this.categoryList = response;
    })
  }

  getCategoryById(category:Category){
    console.log(category)
  }

}
