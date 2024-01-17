import React from 'react'
import styles from "./search.module.scss"

const search = ({setSearch, setPageNumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input onChange={e=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }
        } placeholder="Search" type='text' className={`${styles.input}`}></input>
        <button onClick={
            e=>{
                e.preventDefault();
            }
        }className={` btn btn-primary ${styles.btn}`}>Search</button>
    </form>
  )
}

export default search