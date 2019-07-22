import React, { Component } from 'react';

import { reduxForm, Field, formValueSelector } from 'redux-form';

import LabelAndInput from '../components/form/labelAndInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './billingCycleAction';
import CreditList from './creditList';

class BillingCycleForm extends Component {
    render() {

        //Method available from 'redux-form'
        const { handleSubmit, readOnly, credits } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name'
                        readOnly={readOnly}
                        component={LabelAndInput}
                        label="Name"
                        cols="12 4"
                        placeholder="Name"
                    />
                    <Field name='month'
                        readOnly={readOnly}
                        component={LabelAndInput}
                        label="Month"
                        cols="12 4"
                        placeholder="Month"
                        type="number"
                    />
                    <Field name='year'
                        readOnly={readOnly}
                        component={LabelAndInput}
                        label="Year"
                        cols="12 4"
                        placeholder="Year"
                        type="number"
                    />
                </div>
                <CreditList cols='12 6' readOnly={readOnly} list={credits}/>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits')});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
