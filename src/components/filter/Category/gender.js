import React from 'react'
import FilterBTN from '../filterBTN'

const gender = ({setGender, setPageNumber}) => {
    let gender = ["Male", "Female", "GenderLess", "Unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Gender      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex gap-3 flex-wrap">
      {gender.map((item, index)=> (
                    <FilterBTN key={index} name="gender" task={setGender} setPageNumber={setPageNumber} index={index} item={item} />))}

      </div>
    </div>
  </div>
  )
}

export default gender