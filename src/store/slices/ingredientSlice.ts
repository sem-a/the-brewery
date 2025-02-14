import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IngredientState {
  value: string[];
  translated: string[];
}

const initialState: IngredientState = {
  value: [],
  translated: [],
};

const ingredientSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, actions: PayloadAction<string[]>) => {
      state.value = actions.payload;
    },
    setTranslatedIngredients: (state, action: PayloadAction<string[]>) => {
      state.translated = action.payload;
    },
  },
});

export const { setIngredients, setTranslatedIngredients } =
  ingredientSlice.actions;
export default ingredientSlice.reducer;
