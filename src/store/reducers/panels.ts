import {
  IPanelState,
  PanelsAction,
  PanelsActionTypes,
} from "../../types/panel";

const initialState = {
  items: [
    {
      title: "Name of panel",
      carts: ["Todo", "Todo2", "Todo 3"],
    },
  ],
};

export const panels = (
  state = initialState,
  action: PanelsAction
): IPanelState => {
  switch (action.type) {
    case PanelsActionTypes.CARTS_ADD:
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (action.payload.index === index) {
            return {
              ...item,
              carts: [...item.carts, action.payload.text],
            };
          }
          return item;
        }),
      };
    case PanelsActionTypes.PANELS_ADD:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
