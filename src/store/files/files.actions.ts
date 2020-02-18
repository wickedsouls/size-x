import {Types} from './types';
import {ipcRenderer} from 'electron';
import {Dispatch} from 'redux';

export interface OnDragEnterAction {
   type: Types.ON_DRAG_ENTER
}

export interface OnDragLeaveAction {
   type: Types.ON_DRAG_LEAVE
}

export interface OnDropAction {
   type: Types.ON_DROP
}

export interface ShowSizeSelectionAction {
   type: Types.SHOW_SIZE_SELECTION
}

export interface OnSizeSelectAction {
   type: Types.ON_SIZE_SELECT,
   size: number
}
export interface UploadSuccessAction {
   type:Types.UPLOAD_SUCCESS
}

export const onDrop = (files: File[]): AsyncAction | OnDropAction => {
   const filesInfo = files.map((file) => file.path);
   return (dispatch: Dispatch, getState) => {
      const {size} = getState().files;
      ipcRenderer.send('file:upload', filesInfo, size);
      dispatch({
         type: Types.ON_DROP
      });
   }
};

export const onUploadSuccess = ():UploadSuccessAction=>{
    return {
       type:Types.UPLOAD_SUCCESS
    }
};

export const onDragEnter = (): OnDragEnterAction => {
   return {
      type: Types.ON_DRAG_ENTER
   }
};

export const onDragLeave = (): OnDragLeaveAction => {
   return {
      type: Types.ON_DRAG_LEAVE
   }
};

export const showSizeSelection = (): ShowSizeSelectionAction => {
   return {
      type: Types.SHOW_SIZE_SELECTION
   }
};

export const onSizeSelect = (size: number): OnSizeSelectAction => {
   return {
      type: Types.ON_SIZE_SELECT,
      size
   }
};


export type FilesActions =
   OnDragEnterAction |
   OnDragLeaveAction |
   OnDropAction |
   ShowSizeSelectionAction |
   OnSizeSelectAction |
   UploadSuccessAction