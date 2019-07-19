import React, { Component } from 'react';
import { Content } from 'adminlte-2-react';

import { Tabs, TabsHeader, TabsContent, TabContent, TabHeader } from '../components/tabs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { create } from './billingCycleAction';

import List from './billingCycleList';
import Form from './billingCycleForm';

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
                        <TabContent id="tabList">
                            <List />
                        </TabContent>
                        <TabContent id="tabCreate">
                            <Form onSubmit={this.props.create} />
                        </TabContent>
                        <TabContent id="tabUpdate"><h1>Update</h1></TabContent>
                        <TabContent id="tabDelete"><h1>Delete</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ create }, dispatch);
export default connect(null,mapDispatchToProps) (BillingCycle);