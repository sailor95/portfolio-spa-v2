import { combineReducers } from 'redux';

import globalReducer from './global/globalReducer';

const rootReducer = combineReducers({
    globalState: globalReducer
});

export default rootReducer;