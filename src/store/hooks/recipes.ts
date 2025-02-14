import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { Recipe, setRecipes } from "../slices/recipeSlice";

export const useRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipes = useSelector((state: RootState) => state.recipe.recipes);

  const updateRecipes = (newRecipes: Recipe[]) => {
    dispatch(setRecipes(newRecipes));
  };

  return { recipes, updateRecipes };
};
