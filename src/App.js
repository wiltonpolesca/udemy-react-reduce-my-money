import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';

import Notifications from './components/notification/notification';
import Dashboard from './dashboard/dashboard';
import BillingCycle from './billingCycle/billingCycle';

const { Item } = Sidebar;

class App extends Component {

  bilingCycleItems = [
    <Item key="BillingCycle" text="Cadastro" to="/billing-cycles" />
  ]

  sidebar = [

    <Item key="Dashboard" text="Dashboard" to="/dashboard" />,
    <Item key="BillingCycle-" text="Billing Cycle" split children={this.bilingCycleItems} />
  ]

  render() {
    return (
      <React.Fragment>
        <Notifications />
        <AdminLTE title={["My", "Money"]} titleShort={["My", "M"]} theme="blue" sidebar={this.sidebar}>
          <Dashboard path='/dashboard' />
          <BillingCycle path='/billing-cycles' />
        </AdminLTE>
      </React.Fragment>
    );
  }
}

export default App;
