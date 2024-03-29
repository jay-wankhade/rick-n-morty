import React from 'react'
import FilterBTN from '../filterBTN';
const species = ({setPageNumber, setSpecies}) => {
    let species = ["Human","Alien", "Humanoid","Poopybutthole", "Mythological","Unknown", "Animal","Disease", "Robot", "Cronenberg", "Planet",
      ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Species      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex gap-3 flex-wrap ">
      {species.map((item, index)=> (
                    <FilterBTN key={index} task={setSpecies} setPageNumber={setPageNumber} name="species" index={index} item={item} />))}
      </div>
    </div>
  </div>
  )
}

export default species