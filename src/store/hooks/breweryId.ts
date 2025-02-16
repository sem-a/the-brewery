import { useDispatch, useSelector } from "react-redux";
import { fetchBreweries } from "../slices/brewerySlice";
import { RootState } from "../store";

export const useBreweryById = (id: string) => {
  const dispatch = useDispatch();
  const breweries = useSelector((state: RootState) => state.brewery.brewery);
  const status = useSelector((state: RootState) => state.brewery.status);
  const error = useSelector((state: RootState) => state.brewery.error);

  if (status === "idle") {
    dispatch(fetchBreweries() as any);
  }

  const localBrewery = JSON.parse(
    localStorage.getItem(`brewery_${id}`) || "null"
  );

  if (localBrewery) {
    return { brewery: localBrewery, status, error };
  }

  const brewery = breweries.find((brewery) => brewery.id === id);

  return { brewery, status, error };
};
