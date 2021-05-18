import { PanelsActionTypes, PanelsAction } from "../../types/panel";

export const addPanel = (name: string): PanelsAction => ({
  type: PanelsActionTypes.ADD_PANEL,
  payload: name,
});

export const removePanel = (index: number): PanelsAction => ({
  type: PanelsActionTypes.PANEL_REMOVE,
  payload: index,
});
