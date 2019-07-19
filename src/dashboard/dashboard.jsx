import React, { Component } from 'react';
import { Content, Row } from 'adminlte-2-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSummary } from './dashboardActions';

//components
import ValueBox from '../components/valueBox';

class Dashboard extends Component {
    
    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;
        return (
            <Content title="Dashboard" browserTitle="Dashboard">
                < Row >
                    <ValueBox color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
                    <ValueBox color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
                    <ValueBox color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor consolidado' />
                </Row>
            </Content>
        );
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
