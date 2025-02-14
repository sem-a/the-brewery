export interface Ingredients {
  aisle: string;
  amount: number;
  id: number;
  image: string;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
}

export interface RecipeApi {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: Ingredients[];
  title: string;
  unusedIngredients: Ingredients[];
  usedIngredientCount: number;
  usedIngredients: Ingredients[];
}
