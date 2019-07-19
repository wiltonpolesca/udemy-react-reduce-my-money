import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getList } from './billingCycleAction';

class BillingCycleForm extends Component {
    render() {
        
        //Method available from 'redux-form'
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component='input' />
                    <Field name='month' component='input' />
                    <Field name='year' component='input' />
                </div>
                <div className="box-footer">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

// const mapStateToProps = state => ({ list: state.billingCycle.list });
// const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm);
