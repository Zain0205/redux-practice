import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    stockBarang: [],
  },
  reducers: {
    addItem(state, actions) {
      const newItem = actions.payload;

      if (!localStorage.getItem("stock")) {
        localStorage.setItem("stock", JSON.stringify(state.stockBarang));
      }

      const data = JSON.parse(localStorage.getItem("stock"));

      const newData = [...data, newItem];

      localStorage.setItem("stock", JSON.stringify(newData));
    },
    delleteItem(state, actions){
      const itemName = actions.payload
      const stock = JSON.parse(localStorage.getItem('stock'))

      const newArray = stock.filter(x => x.nama !== itemName)

      localStorage.setItem('stock', JSON.stringify(newArray))
    }
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
