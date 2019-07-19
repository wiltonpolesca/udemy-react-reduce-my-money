import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';

//Components
import Darshboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props =>
    <Router>
        <Route path='/' component={Darshboard} />
        <Route path='/billing-cycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>