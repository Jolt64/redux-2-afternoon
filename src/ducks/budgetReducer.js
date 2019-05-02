import Axios from 'axios';

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export function requestBudgetData() {
    let data = Axios.get('/api/budget-data').then(res => res.data)
    console.log(data);
    
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return {...state, loading: true};
        case REQUEST_BUDGET_DATA + '_FULFILLED':
        const { purchases, budgetLimit } = action.payload.data
            return { purchases, budgetLimit, loading:false }
        case REQUEST_BUDGET_DATA + '_REJECTED':
            return {...state, loading: false}
        default:
            return state;
    }
}