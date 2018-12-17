import { combineReducers } from 'redux';
import sessionReducer from './session_reducer/session_reducer';
import errorsReducer from './errors_reducer/errors_reducer';
import entitiesReducer from './entities_reducer/entities_reducer';
import uiReducer from './ui_reducer/ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;