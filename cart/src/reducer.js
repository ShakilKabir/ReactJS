import React from "react";

export default function reducer(state, action) {
  if (action.type === "CLEAR_ITEMS") {
    console.log(state);
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === "INCREASE") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }
  if (action.type === "DECREASE") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }
  if (action.type === "TOTAL_AMOUNT") {
    const newCart = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    let newTotal = parseFloat(newCart.total).toFixed(2);
    newCart.total = newTotal;
    return { ...state, ...newCart };
  }

  return state;
}
