const INITIAL_STATE = { list: [], activeTab: '', itemToUpdate: {}, updateMode: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data };
        case 'BILLING_SELECTED_TAB':
            return { ...state, activeTab: action.payload.tab};
        default:
            return state;
    }
}