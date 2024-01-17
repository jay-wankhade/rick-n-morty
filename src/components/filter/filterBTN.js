import React from 'react'

const filterBTN = ({name, item,index, task, setPageNumber}) => {
  return (
    <div>
        <style jsx>
            {`
            .form-check-input:checked + label{
                background-color: #0b5ed7;
                color: white;
            }


            input[type="radio"]{
                display: none;
            }
            `}

        </style>
        <div className="form-check">
  <input
  onClick={()=>{
    setPageNumber(1);
    task(item);
  }}
  className="form-check-input" type="radio" name={name} id={`${name}-${index}`}/>
  <label className="btn btn-outline-primary" for={`${name}-${index}`}>
{item}  </label>
</div>
    </div>
  )
}

export default filterBTN