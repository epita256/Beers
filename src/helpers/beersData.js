import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { selectBeersForPage } from '../reducer/beers/selectors';
import {
    getBeersForPage,
} from '../reducer/beers/actions';

export const beersPageData = (fetching) => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (fetching) {
            dispatch(getBeersForPage(`${currentPage}`))
            setCurrentPage((currentPage) => currentPage + 1)
            fetching = false;
        }
    }, [dispatch, fetching]);

    const {
        data,
        isLoading,
        error
    } = useSelector(selectBeersForPage, shallowEqual);

    return { data, isLoading, error };
}