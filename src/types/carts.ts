export interface ICartState {
  items: any[];
}

export enum CartsActionTypes {
  CARTS_ADD = "CARTS_ADD",
}

interface CartAddAction {
  type: CartsActionTypes.CARTS_ADD;
  payload: any[];
}

export type CartsAction = CartAddAction;
