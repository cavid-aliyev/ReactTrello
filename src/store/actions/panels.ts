import {PanelsActionTypes, PanelsAction} from '../../types/panel'

export const addPanel = (name: any[]): PanelsAction => ({
    type: PanelsActionTypes.ADD_PANEL,
    payload: name
})