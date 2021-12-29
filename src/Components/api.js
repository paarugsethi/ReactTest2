import { getProductFailure, getProductRequest, getProductSuccess } from "../Redux/action";
// import { shallowEqual, useDispatch, useSelector } from "react-redux"


export const getProducts = (dispatch) => {
    // PRE-FETCH
    const requestAction = getProductRequest();
    dispatch(requestAction);

    return (
        // SUCCESS
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const successAction = getProductSuccess(res);
            dispatch(successAction);
        })
        // FAILURE
        .catch((err) => {
            const failureAction = getProductFailure();
            dispatch(failureAction);
        })
    )

}