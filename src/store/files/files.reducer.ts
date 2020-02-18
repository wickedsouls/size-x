import {Types,} from './types';
import {FilesActions} from './files.actions';

export interface Files {
   loading: boolean,
   focus: boolean,
   sizeSelect:boolean,
   size:number,
   count:number
}

const initialState: Files = {
   loading: false,
   focus: false,
   sizeSelect:false,
   size:0.5,
   count:0
};

export const filesReducer = (state = initialState, action: FilesActions) => {
   switch (action.type) {
      case Types.UPLOAD_SUCCESS :{
         return {...state, count:state.count+1}
      }
      case Types.ON_DRAG_LEAVE :
         return {...state, focus: false};
      case Types.ON_DROP :
         return {...state, focus: false};
      case Types.ON_DRAG_ENTER :
         return {...state, focus: true};
      case Types.ON_SIZE_SELECT :
         return {...state, size:action.size, sizeSelect:false};
      case Types.SHOW_SIZE_SELECTION :
         return {...state, sizeSelect:!state.sizeSelect};
      default :
         return state;
   }
};