// ?check type
export interface IPanelState {
  items: any[];
}

export enum PanelsActionTypes {
  CARTS_ADD = "CARTS_ADD",
  ADD_PANEL = "ADD_PANEL",
}

interface CartAddAction {
  type: PanelsActionTypes.CARTS_ADD;
  payload: {
    panelIndex: number;
    text: string;
  };
}

interface PanelsAddAction {
  type: PanelsActionTypes.ADD_PANEL;
  payload: any[];
}

export type PanelsAction = CartAddAction | PanelsAddAction;
