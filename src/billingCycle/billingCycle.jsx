import React, { Component } from 'react';
import { Content } from 'adminlte-2-react';

import { Tabs, TabsHeader, TabsContent, TabContent, TabHeader } from '../components/tabs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init, create, update, onDelete } from './billingCycleAction';

import List from './billingCycleList';
import Form from './billingCycleForm';

class BillingCycle extends Component {

    componentWillMount(){
        this.props.init();
    }
    render() {
        return (
            <Content title="Payment cycles" small="registry" browserTitle="Dashboard" >
                <Tabs id="controlled-tab-example">
                    <TabsHeader>
                        <TabHeader label="List" icon="bars" target="tabList"/>
                        <TabHeader label="Add" icon="plus" target="tabCreate"/>
                        <TabHeader label="Update" icon="pencil" target="tabUpdate"/>
                        <TabHeader label="Delete" icon="trash-o" target="tabDelete" visible={this.editMode} />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <List />
                        </TabContent>
                        <TabContent id="tabCreate">
                            <Form onSubmit={this.props.create} submitLabel="Add" submitClass="primary" />
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <Form onSubmit={this.props.update} submitLabel="Update" submitClass="info"/>
                        </TabContent>
                        <TabContent id="tabDelete">
                            <Form onSubmit={this.props.onDelete} readOnly={true} submitLabel="Delete" submitClass="danger"/>
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        )
    }
}
const mapStateToProps = state => ({ activeTab: state.billingCycle.activeTab, updateMode: state.billingCycle.updateMode });
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, onDelete }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps) (BillingCycle);