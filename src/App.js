import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';

import Dashboard from './dashboard/dashboard';
import BillingCycle from './billingCycle/billingCycle';

const { Item } = Sidebar;

// class HelloWorld extends Component {
//   state = {}

//   render() {
//     return (<Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
//       <Row>
//         <Col xs={6}>
//           <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
//             Hello World
//           </Box>
//         </Col>
//         <Col xs={6}>
//           <Box title="Another box">
//             Content goes here
//           </Box>
//         </Col>
//       </Row>
//     </Content>);
//   }
// }

class App extends Component {

  bilingCycleItems = [
    <Item key="BillingCycle" text="Cadastro" to="/billing-cyclgites" />
  ]

  sidebar = [

    <Item key="Dashboard" text="Dashboard" to="/dashboard" />,
    <Item key="BillingCycle-" text="Billing Cycle" split children={this.bilingCycleItems}  />
  ]

  render() {
    return (
      <AdminLTE title={["My", "Money"]} titleShort={["My", "M"]} theme="blue" sidebar={this.sidebar}>
        <Dashboard path='/dashboard' />
        <BillingCycle path='/billing-cycles' />

      </AdminLTE>
    );
  }
}

export default App;
