import React, { Component } from 'react';
import { Content } from 'adminlte-2-react';

import { Tabs, TabsHeader, TabsContent, TabContent, TabHeader } from '../components/tabs';

class BillingCycle extends Component {
    editMode = false;

    render() {

        return (
            <Content title="Payment cycles" small="registry" browserTitle="Dashboard" >
                <Tabs id="controlled-tab-example" activeTab="tabList" onSelect={() => (1 + 1)}>
                    <TabsHeader>
                        <TabHeader label="List" icon="bars" target="tabList" />
                        <TabHeader label="Add" icon="plus" target="tabCreate" />
                        <TabHeader label="Update" icon="pencil" target="tabUpdate" visible={this.editMode}/>
                        <TabHeader label="Delete" icon="trash-o" target="tabDelete" visible={this.editMode} />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList"><h1>Lista</h1></TabContent>
                        <TabContent id="tabCreate"><h1>Create</h1></TabContent>
                        <TabContent id="tabUpdate"><h1>Update</h1></TabContent>
                        <TabContent id="tabDelete"><h1>Delete</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        )
    }
}

export default BillingCycle;