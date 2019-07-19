import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTab } from './tabActions'


class Tab extends Component {
    componentWillMount() {
        if (this.props.activeTab) {
            this.props.selectTab(this.props.activeTab);
        }
    }

    render() {
        return (
            <div className='nav-tabs-custom'>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({ tab: state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tab)