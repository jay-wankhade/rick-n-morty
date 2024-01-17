import React, {useState, useEffect } from 'react'
import Card from '../components/card/card';
import InputGroup from '../components/filter/Category/inputgroup';

const Episode = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {air_date, name} = info;
    let api =`https://rickandmortyapi.com/api/episode/${id}`
    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then((res)=> res.json())
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x)=>{
                    return fetch(x).then((res)=>res.json())
                })
            );
            setResults(a);
        })()

    },[api]);


  return (
    <div className='container'>
        <div className='row'>
            <h1 className='text-center'> Episode : {name}</h1>
            <h4 className='text-center'>
                Air Date : {air_date}
            </h4>
        </div>
        <div className='row'>
            <div className='col-lg-3 col-12'>
             <div className='text-center fw-bold fs-4 mb-4'>   Pick Episode</div>
             <InputGroup total={51} name="Episode" setId={setID}/>
            </div>
            <div className='col-lg-8 col-12'>
                <div className='row'>
                    <Card page='/episode/' results={results}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Episode