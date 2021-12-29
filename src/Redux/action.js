// ACTION CONSTANTS
export const actionConstants = {
    GET_PRODUCT_REQUEST: "GET_PRODUCT_REQUEST",
    GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE"
};

// ACTION CREATORS
export const getProductRequest = () => {
    return {
        type: actionConstants.GET_PRODUCT_REQUEST,
        payload: {
            isLoading: true
        }
    }
}

export const getProductSuccess = (products) => {
    return {
        type: actionConstants.GET_PRODUCT_SUCCESS,
        payload: {
            products: products,
            isLoading: false
        }
    }
}

export const getProductFailure = () => {
    return {
        type: actionConstants.GET_PRODUCT_FAILURE,
        payload: {
            isLoading: false,
            isError: true
        }
    }
}