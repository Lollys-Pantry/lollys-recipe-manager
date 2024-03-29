export interface RecipeItem {
  ingredients_attributes?: Ingredient[];
  ingredients?: Ingredient[];
  nutritional_labels_attributes?: NutritionalLabel[];
  nutritional_labels?: NutritionalLabel[];
  cooking_steps?: CookingStep[];
  cooking_steps_attributes?: CookingStep[];
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

export interface NutritionalLabel {
  id?: number;
  serving_size: string;
  calories: string;
  total_fat: string;
  saturated_fat: string;
  sodium: string;
  carbohydrates: string;
  fiber: string;
  sugar: string;
  protein: string;
  recipe_id: number;
}

export interface CookingStep {
  id?: number;
  step: number;
  description: string;
}
