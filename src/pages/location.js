import React, {useState, useEffect } from 'react'
import Card from '../components/card/card';
import InputGroup from '../components/filter/Category/inputgroup';

const Location = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { name, type, dimension} = info;
    let api =`https://rickandmortyapi.com/api/location/${id}`
    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then((res)=> res.json())
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((x)=>{
                    return fetch(x).then((res)=>res.json())
                })
            );
            setResults(a);
        })()

    },[api]);


  return (
    <div className='container'>
        <div className='row'>
            <h1 className='text-center'> Location : {name}</h1>
            <h4 className='text-center'>
                Dimension : {dimension}
            </h4>
            <h5 className='text-center'>
                Type : {type}
            </h5>
        </div>
        <div className='row'>
            <div className='col-lg-3 col-12'>
             <div className='text-center fw-bold fs-4 mb-4'>   Pick Location</div>
             <InputGroup total={126} name="Location" setId={setID}/>
            </div>
            <div className='col-lg-8 col-12'>
                <div className='row'>
                    <Card page='/location/' results={results}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Location