import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] =[
   new Recipe(
     'Tasty Schnitzel',
     'A super-tasty Schnitzel - just awesome',
     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.jpeg',
     [
       new Ingredient('Meat',1),
       new Ingredient('French Fries',20)       
     ]),
   new Recipe(
     'Big Fat Burger',
     'A Super Big Fat Burger',
     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpeg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ])
  ];
  getRecipes(){
    return this.recipes.slice();
  }

}
