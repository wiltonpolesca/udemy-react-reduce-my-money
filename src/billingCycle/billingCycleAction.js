import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

import {showTabs, selectTab} from '../components/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';

const INITIAL_VALUES = {credits:[{}]};

export function getList() {
    const request = axios.get(`${BASE_URL}/billingcycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post');
}

export function update(values) {
    return submit(values, 'put');
}

export function onDelete(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Success', 'Item saved successfully')
                dispatch(init());
            })
            .catch(e => {
                e.response.data.errors.forEach(element => {
                    toastr.error('Error', element);
                })
            })
        }
    }
export function setCurrentTab(tab) {
    return {
        type: 'BILLING_SELECTED_TAB',
        payload: {tab}
    }
}


export function showUpdate(item) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        setCurrentTab('tabUpdate'),
        initialize('billingCycleForm', item)
    ]
}

export function showDelete(item) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        // setCurrentTab('tabDelete'),
        initialize('billingCycleForm', item)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        // setCurrentTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ];
}