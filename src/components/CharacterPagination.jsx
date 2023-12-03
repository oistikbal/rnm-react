import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import {setPage} from '../store/PageSlice'
import { useEffect } from 'react';
import {getCharacters, getEpisodes, getLocations} from "../store/RnMSlice"

const clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }


export default function CharacterPagination(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCharacters())
        dispatch(getEpisodes())
        dispatch(getLocations())
    },[])

    const pageValue = useSelector(state => state.page.value)

    return (
        <Pagination className="align-middle">
          <Pagination.Prev onClick={() => dispatch(setPage(clamp(value - 1, 1, Infinity)))}/>
          <Pagination.Item active>{pageValue}</Pagination.Item>
          <Pagination.Next onClick={() => dispatch(setPage(clamp(value + 1, 1, Infinity)))}/>
        </Pagination>
    );
}