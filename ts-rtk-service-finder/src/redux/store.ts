import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    categoryState: categoryReducer,
    a_state: categoryReducer,
    b_state: categoryReducer,
    c_state: categoryReducer,
  },
});

export type AppStateType = ReturnType<typeof store.getState>;

export default store;

///////////////////////////////////////////////
/*
Sınırsız sayıda property tanımlamak için köşeli parantez içerisinde property ve type yazılır.
Buradaki köşeli parantez sayesinde belirsiz (veya başka bir deyimle sınırsız) miktarda property'ye
veya elemana sahip olunabilir.
*/
type ExampleType = {
  [prop1: string]: any;
};
const foo: ExampleType = {
  prop1: "test",
  prop2: "test",
  prop3: "test",
};

type ExampleType2 = {
  [prop1: number]: any;
};
const x: ExampleType2 = [];
x[0] = "test";

const bar: string[] = [];
bar.push("test");
bar[0];
