import React, { Component } from 'react';
import { Field, arrayInsert } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '../components/form/input';

class CreditList extends Component {

    add(index, item={}){
        if (this.props.readOnly){
            return;
        }

        console.log(index);
    }
    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`}
                    component={Input}
                    placeholder="Name"
                    readOnly={this.props.readOnly}
                ></Field></td>
                <td><Field name={`credits[${index}].value`}
                    component={Input}
                    placeholder="Value"
                    readOnly={this.props.readOnly}
                ></Field></td>
                <td>
                    <button type="button" className="btn btn-success"
                        onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </td>
            </tr>
        ));
    }
    render() {
        return (
            <div cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <th className="table-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(CreditList);
export default CreditList;