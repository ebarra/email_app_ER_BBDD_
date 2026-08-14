import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import profileReducer from './profileReducer';
import emailsReducer from './emailsReducer';
import chatsReducer from './chatsReducer';

const GlobalState = combineReducers({
  loading:loadingReducer,
  profile:profileReducer,
  emails:emailsReducer,
  chats:chatsReducer,
});

export default GlobalState;