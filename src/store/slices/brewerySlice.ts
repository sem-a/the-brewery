import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BreweryType } from "../../types";

interface BreweriesState {
  brewery: BreweryType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

export const fetchBreweries = createAsyncThunk<BreweryType[]>(
  "breweries/fetchBreweries",
  async () => {
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
    return response.json();
  }
);
export const fetchBreweryById = createAsyncThunk<BreweryType, string>(
  "breweries/fetchBreweryById",
  async (id) => {
    const response = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/${id}`
    );
    return response.json();
  }
);

const initialState: BreweriesState = {
  brewery: [],
  status: "idle",
  error: null,
};

const breweriesSlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreweries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBreweries.fulfilled,
        (state, action: PayloadAction<BreweryType[]>) => {
          state.status = "succeeded";
          state.brewery = action.payload;
        }
      )
      .addCase(fetchBreweries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default breweriesSlice.reducer;
