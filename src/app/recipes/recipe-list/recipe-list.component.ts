import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'so yummy', "https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg"),
    new Recipe('A Test Recipe', 'so yummy', "https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg"),
    new Recipe('A Test Recipe', 'so yummy', "https://cdn.pixabay.com/photo/2016/01/14/09/47/food-1139580_960_720.jpg"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
