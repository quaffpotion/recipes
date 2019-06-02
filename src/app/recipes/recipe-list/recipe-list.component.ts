import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'so yummy', 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive/v1/img/recipes/51/57/4/C3z30sZYS8C64frGOcGw_garlic-shrimp-and-asparagus-1.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
