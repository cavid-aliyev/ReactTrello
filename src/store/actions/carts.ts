import {PanelsActionTypes, PanelsAction} from '../../types/panel'

export const addCart = (panelIndex: number, text: string): PanelsAction => ({
    type: PanelsActionTypes.CARTS_ADD,
    payload: {
        panelIndex,
        text
    }
})

export const removeCart = (panelIndex: number, cartIndex: number): PanelsAction =>({
    type: PanelsActionTypes.CARTS_REMOVE,
    payload: {
        panelIndex,
        cartIndex,
    }
})

export const reorderCarts = ({source, destination}: any): PanelsAction => ({
    type: PanelsActionTypes.CARTS_REORDER,
    payload: {
      source,
      destination
    }
})