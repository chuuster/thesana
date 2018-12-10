import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
});

export default rootReducer;