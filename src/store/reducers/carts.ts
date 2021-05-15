import { ICartState, CartsAction } from "../../types/carts";

const initialState = {
  items: [],
};

export const carts = (
  state = initialState,
  action: CartsAction
): ICartState => {
  switch (action.type) {
    case "CARTS_ADD":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
