import { combineReducers } from 'redux';

//Import reducers
import dashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../components/tab/tabReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer
});

export default rootReducer;