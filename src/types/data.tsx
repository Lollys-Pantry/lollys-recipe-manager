export interface RecipeItem {
  ingredients_attributes: unknown;
  ingredients: unknown;
  id?: number;
  name: string;
  description: string;
  servings: number;
  prep_time: string;
  cook_time: string;
  sprouty_pie: boolean;
  lollys_pantry: boolean;
}

export interface Ingredient {
  id?: number;
  quantity: number;
  measurement: string;
  name: string;
  preparation: string;
  recipe_id: number;
}
