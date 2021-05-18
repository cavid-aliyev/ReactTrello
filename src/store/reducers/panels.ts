import {
  IPanelState,
  PanelsAction,
  PanelsActionTypes,
} from "../../types/panel";

import { reorderCarts } from "../../helpers/reorderCarts";

const initialState = {
  items: [
    {
      title: "План на месяц",
      carts: [
        "Пройти курс по React",
        "Отметить день рождения",
        "Записаться на курсы английского языка, чтобы уехать жить в ЛА",
      ],
    },
    {
      title: "План на день",
      carts: [
        "Записаться на курс по React",
        "Забронировать тир на субботу",
        "Накидать тем для статей в блог",
      ],
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
          if (action.payload.panelIndex === index) {
            return {
              ...item,
              carts: [...item.carts, action.payload.text],
            };
          }
          return item;
        }),
      };
    case PanelsActionTypes.CARTS_REMOVE:
      return {
        ...state,
        items: state.items.map((item, columnIndex) => {
          if (action.payload.panelIndex === columnIndex) {
            return {
              ...item,
              carts: item.carts.filter(
                (_, filterIndex) => filterIndex !== action.payload.cartIndex
              ),
            };
          }
          return item;
        }),
      };
    case PanelsActionTypes.ADD_PANEL:
      return {
        ...state,
        items: [
          {
            title: action.payload,
            carts: [],
          },
        ],
      };
    case PanelsActionTypes.CARTS_REORDER: {
      const { source, destination } = action.payload;
      return reorderCarts({
        state,
        source,
        destination,
      });
    }
    case PanelsActionTypes.PANEL_REMOVE:
      return {
        items: state.items.filter((_, index) => action.payload !== index),
      };
    default:
      return state;
  }
};
