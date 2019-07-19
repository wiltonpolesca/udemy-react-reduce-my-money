import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm } from 'redux-form';

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/billingcycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => (
        axios.post(`${BASE_URL}/billingcycles`, values)
            .then(resp => {
                toastr.success('Success', 'Item saved successfully')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    
                ]);
            }
            )
            .catch(e => {
                e.response.data.errors.forEach(element => {
                    toastr.error('Error', element);
                })

            }

                // return {
                //         type: 'BILLING_ADD_NEW',
                //         payload: values
                //     }
            )
    );
}