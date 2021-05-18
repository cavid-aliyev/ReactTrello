import {PanelsActionTypes, PanelsAction} from '../../types/panel'

export const addCart = (panelIndex: number, text: string): PanelsAction => ({
    type: PanelsActionTypes.CARTS_ADD,
    payload: {
        panelIndex,
        text
    }
})