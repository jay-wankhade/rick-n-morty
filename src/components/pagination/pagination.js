import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, info, setPageNumber}) =>{
let [width, setWidth] = useState(window.innerWidth);
let updateWidth=()=>{
setWidth(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener("resize", updateWidth);
return ()=> window.removeEventListener("resize", updateWidth);
},[])
  
  return (
  <>
  <style jsx>
    { `
    .pagination{
      color: #fff;
    }
    
    @media (max-width: 768px){
      .next, .prev{
        display : none;
      }
      .pagination{
        font-size:14px;
      }

    }
    `}
  </style>
  <ReactPaginate className='pagination justify-content-center my-4 gap-4'
  nextLabel='Next'
  forcePage={pageNumber ===1? 0: pageNumber-1}
  pageClassName='page-item'
  pageLinkClassName='page-link'
  previousLabel='Prev'
  previousClassName='btn prev'
  nextClassName='btn next'
  activeClassName='active'
  onPageChange={
    (data)=>{
        setPageNumber(data.selected+1);
    }
  }
  pageCount={info?.pages}/>;
  
    </>
  )
}

export default Pagination