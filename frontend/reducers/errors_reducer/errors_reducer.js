import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  projects: projectErrorsReducer
});

export default errorsReducer;

// import { combineReducers } from 'redux';

// import sessionErrorsReducer from './session_errors_reducer';

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// });

// export default errorsReducer;