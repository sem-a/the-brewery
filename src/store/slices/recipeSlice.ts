import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipes: (state, actions: PayloadAction<Recipe[]>) => {
      state.recipes = actions.payload;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
