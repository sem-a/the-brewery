import { useDispatch, useSelector } from "react-redux";
import { fetchBreweries } from "../slices/brewerySlice";
import { RootState } from "../store";

export const useBreweries = () => {
  const dispatch = useDispatch();
  const breweries = useSelector((state: RootState) => state.brewery.brewery);
  const status = useSelector((state: RootState) => state.brewery.status);
  const error = useSelector((state: RootState) => state.brewery.error);

  if (status === "idle") {
    dispatch(fetchBreweries() as any);
  }
  const updatedBreweries = breweries.map((brewery) => {
    const localData = JSON.parse(
      localStorage.getItem(`brewery_${brewery.id}`) || "{}"
    );
    if (localData) {
      return { ...brewery, ...localData };
    }
    return brewery;
  });

  return { breweries: updatedBreweries, status, error };
};
