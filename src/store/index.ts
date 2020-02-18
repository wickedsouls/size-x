import {combineReducers, createStore, applyMiddleware, Action} from 'redux';
import {Files, filesReducer} from './files/files.reducer';
import thunk, {ThunkAction} from 'redux-thunk';

declare global {
   interface GlobalState {
      files:Files
   }
}

declare global{
   interface Interface {

   }
   type AsyncAction<ReturnType = void> = ThunkAction<ReturnType,
      GlobalState,
      null,
      Action<string>>
}

const rootReducer = combineReducers<GlobalState>({
   files:filesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
