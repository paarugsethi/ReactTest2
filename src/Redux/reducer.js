import { actionConstants } from "./action";

const initState = {
    products: [],
    isLoading: true,
    isError: false
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionConstants.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case actionConstants.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                products: action.payload.products,
                isLoading: false,
                isError: false
            }
        }
        case actionConstants.GET_PRODUCT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}

export default reducer;