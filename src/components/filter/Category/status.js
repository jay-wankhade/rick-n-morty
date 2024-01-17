import React from 'react'
import FilterBTN from '../filterBTN'
const status = ({setStatus, setPageNumber}) => {
    let status = ["Alive", "Dead", "Unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Status      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex gap-3 flex-wrap">
        {status.map((item, index)=> (
                    <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} item={item} />))}
      </div>
    </div>
  </div>
  )
}

export default status