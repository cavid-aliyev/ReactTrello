// ?check type
export interface IPanelState {
  items: any[];
}

export enum PanelsActionTypes {
  CARTS_ADD = "CARTS_ADD",
  PANELS_ADD = "PANELS_ADD",
}

interface CartAddAction {
  type: PanelsActionTypes.CARTS_ADD;
  payload: {
    index: number;
    text: string;
  };
}

interface PanelsAddAction {
  type: PanelsActionTypes.PANELS_ADD;
  payload: any[];
}

export type PanelsAction = CartAddAction | PanelsAddAction;
