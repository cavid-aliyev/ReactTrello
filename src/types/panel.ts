// ?check type
export interface IPanelState {
  items: any[];
}

export enum PanelsActionTypes {
  CARTS_ADD = "CARTS_ADD",
  CARTS_REMOVE = "CARTS_REMOVE",
  CARTS_REORDER = "CARTS_REORDER",
  ADD_PANEL = "ADD_PANEL",
  PANEL_REMOVE = "PANEL_REMOVE",
}

// Carts

interface CartAddAction {
  type: PanelsActionTypes.CARTS_ADD;
  payload: {
    panelIndex: number;
    text: string;
  };
}

interface CartRemoveAction {
  type: PanelsActionTypes.CARTS_REMOVE;
  payload: {
    panelIndex: number;
    cartIndex: number;
  };
}

interface CartReorderAction {
  type: PanelsActionTypes.CARTS_REORDER;
  payload: {
    // ?check
    source: any;
    destination: any;
  };
}

// Panels

interface PanelsAddAction {
  type: PanelsActionTypes.ADD_PANEL;
  payload: string;
}

interface PanelsRemoveAction {
  type: PanelsActionTypes.PANEL_REMOVE;
  payload: number;
}

export type PanelsAction =
  | CartAddAction
  | PanelsAddAction
  | CartRemoveAction
  | CartReorderAction
  | PanelsRemoveAction;
