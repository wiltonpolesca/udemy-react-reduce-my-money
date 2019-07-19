import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

//Redux form configs
import {reducer as formReducer} from 'redux-form';

//Import reducers
import dashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../components/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
});

export default rootReducer;