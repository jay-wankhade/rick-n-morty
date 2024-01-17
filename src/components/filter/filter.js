import React from 'react'
import Gender from './Category/gender'
import Status from './Category/status'
import Species from './Category/species'

const filter = ({setStatus, setSpecies,setPageNumber, setGender}) => {
  
  let clear =()=>{
    setStatus(""); setSpecies("");
     setPageNumber(""); setGender("");
     window.location.reload(false);
  }
  
  return (
    <div className='col-lg-3 col-12 mb-4'>
      <div className='text-center fs-4 fw-bold mb-2'>Filters</div>
      <div style={{cursor : 'pointer'}} onClick={clear} className='text-center text-decoration-underline text-primary mb-4'>Clear Filter</div>
      <div className="accordion" id="accordionExample">
      <Gender setGender={setGender} setPageNumber={setPageNumber}/>
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
  
  
</div>



    </div>
  )
}

export default filter