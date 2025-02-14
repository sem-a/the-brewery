import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import ingredientsReducer from './slices/ingredientSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    ingredients: ingredientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
