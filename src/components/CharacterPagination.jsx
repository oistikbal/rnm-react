import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import {setPage} from '../store/PageSlice'

export default function CharacterPagination(){
    const dispatch = useDispatch()
    const value = useSelector(state => state.page.value)

    return (
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{value}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item >{14}</Pagination.Item>
    
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
    );
}