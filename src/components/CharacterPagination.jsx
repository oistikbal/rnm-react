import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import {setPage} from '../store/PageSlice'

const clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

export default function CharacterPagination(){
    const dispatch = useDispatch()
    const pageValue = useSelector(state => state.page.value)
    return (
        <Pagination className="align-middle">
          <Pagination.Prev onClick={() => dispatch(setPage(clamp(pageValue - 1, 1, Infinity)))}/>
          <Pagination.Item active>{pageValue}</Pagination.Item>
          <Pagination.Next onClick={() => dispatch(setPage(clamp(pageValue + 1, 1, 15)))}/>
        </Pagination>
    );
}