import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  setIngredients,
  setTranslatedIngredients,
} from "../slices/ingredientSlice";

export const useIngredients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.value
  );
  const translatedIngredients = useSelector(
    (state: RootState) => state.ingredients.translated
  );
  const updateIngredients = (newIngredients: string[]) => {
    dispatch(setIngredients(newIngredients));
  };

  const updateTranslatedIngredients = (newTranslations: string[]) => {
    dispatch(setTranslatedIngredients(newTranslations));
  };

  return {
    ingredients,
    translatedIngredients,
    updateIngredients,
    updateTranslatedIngredients,
  };
};
