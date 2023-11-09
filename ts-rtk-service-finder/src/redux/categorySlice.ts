import { createSlice } from "@reduxjs/toolkit";

export type CategoryType = {
  id: number;
  parent_id: null | number;
  name: string;
  slug: string;
  description: string;
  image: string;
  status: "active" | "passive";
  created_at: string;
  updated_at: string | null;
};

export type CategoryStateType = {
  categories: CategoryType[];
  initialized: boolean;
};

const initialState: CategoryStateType = {
  categories: [],
  initialized: false,
};

const categorySlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      //
    },
    removeCategory: () => {
      //
    },
    addCategory: () => {
      //
    },
  },
});

export default categorySlice.reducer;

export const { addCategory, removeCategory, setCategory } =
  categorySlice.actions;
