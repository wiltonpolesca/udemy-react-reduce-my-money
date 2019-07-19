import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';

// const BILLING_SUMMARY_FETCHED = 'BILLING_SUMMARY_FETCHED';

export const getSummary = () => {
   const request = axios.get(`${BASE_URL}/billingCycles/summary`);
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
