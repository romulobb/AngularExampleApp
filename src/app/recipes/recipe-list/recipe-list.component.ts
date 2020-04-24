import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [ new Recipe('A test Recipe','A test recipe',
                      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
                      new Recipe('Another test Recipe','Another test recipe',
                      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
                    ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
