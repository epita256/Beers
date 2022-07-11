import {
    GET_BEERS_FOR_PAGE_START,
    GET_BEERS_FOR_PAGE_SUCCESS,
    GET_BEERS_FOR_PAGE_ERROR,

    GET_BEER_INFO_START,
    GET_BEER_INFO_SUCCESS,
    GET_BEER_INFO_ERROR,
} from './constants';

export const getBeersForPage = (params) => async (dispatch, _getState, { beerApi }) => {
    try {
        dispatch({ type: GET_BEERS_FOR_PAGE_START, payload: [] });
        const data = await beerApi.getBeersForPage(params);

        setTimeout(() => dispatch({
            type: GET_BEERS_FOR_PAGE_SUCCESS,
            payload: data
        }), 1500);
    }
    catch (error) {
        dispatch({
            type: GET_BEERS_FOR_PAGE_ERROR,
            payload: error
        });
    }
}

export const getBeerInfo = (params) => async (dispatch, _getState, { beerApi }) => {
    try {
        dispatch({ type: GET_BEER_INFO_START, payload: [] });
        const data = await beerApi.getBeerInfo(params)

        dispatch({
            type: GET_BEER_INFO_SUCCESS,
            payload: data,
        })
    }
    catch (error) {
        dispatch({
            type: GET_BEER_INFO_ERROR, 
            payload: error,
        })
    }
}
