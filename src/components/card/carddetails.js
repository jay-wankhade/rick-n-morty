import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Carddetails = () => {
     
    let {id} = useParams();
    let [fetchdata, updatefetchdata] = useState([]);
    let { name, image, species, status, gender, origin, type, location } = fetchdata;

console.log(fetchdata)
    let api=`https://rickandmortyapi.com/api/character/${id}`

    useEffect(() =>{
        (async function(){
          let data = await fetch(api).then(res=>res.json())
          updatefetchdata(data);
        })()
      },[api])
  return (
    <div className='container d-flex justify-content-center'>
        <div className='content d-flex justify-content-center flex-column'>
            <h1 className='d-flex justify-content-center'>
                {name}
            </h1>
            <img src={image} alt={name} className='img-fluid'></img>
            <div className=''>
            <h4><b>Status:</b> {status}</h4>
            <h4><b>Gender:</b> {gender}</h4>
            <h4><b>Species:</b> {species}</h4>
            <h4><b>Origin:</b> {origin?.name}</h4>
            <h4><b>Type:</b> {type===""? "unknown":type}</h4>
            <h4><b>Location:</b> {location?.name}</h4> 
            {/* <h4><b>Episode:</b> {episode}</h4>  */}
            
            </div>



        </div>

    </div>
  )
}

export default Carddetails