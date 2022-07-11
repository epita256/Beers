import {
    GET_BEERS_FOR_PAGE_START,
    GET_BEERS_FOR_PAGE_SUCCESS,
    GET_BEERS_FOR_PAGE_ERROR,

    GET_BEER_INFO_START,
    GET_BEER_INFO_SUCCESS,
    GET_BEER_INFO_ERROR,
} from './constants';

const defaultState = {
    beersForPage: {
        data: [],
        isLoading: false,
        error: false,
    },
    beerInfo: {
        data: [],
        isLoading: false,
        error: false,
    }
};

export default function beers(state = defaultState, action) {
    switch (action.type) {
        case GET_BEERS_FOR_PAGE_START: {
            return {
                ...state,
                beersForPage: {
                    data: state?.beersForPage?.data,
                    isLoading: true,
                    error: false
                },
            };
        }
        case GET_BEERS_FOR_PAGE_SUCCESS: {
            return {
                ...state,
                beersForPage: {
                    data: [...state?.beersForPage?.data, ...action.payload],
                    isLoading: false,
                    error: false,
                }
            }
        }
        case GET_BEERS_FOR_PAGE_ERROR: {
            return {
                ...state,
                beersForPage: {
                    data: [],
                    isLoading: false,
                    error: action.payload,
                }
            }
        }

        case GET_BEER_INFO_START: {
            return {
                ...state,
                beerInfo: {
                    data: state?.beerInfo?.data,
                    isLoading: true,
                    error: false
                },
            };
        }
        case GET_BEER_INFO_SUCCESS: {
            return {
                ...state,
                beerInfo: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case GET_BEER_INFO_ERROR: {
            return {
                ...state,
                beerInfo: {
                    data: [],
                    isLoading: false,
                    error: action.payload,
                }
            }
        }
        default:
            return defaultState
    }
}
