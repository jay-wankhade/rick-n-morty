import React from 'react'
import { Link } from 'react-router-dom';
import styles from './card.module.scss'
import gender from '../filter/Category/gender';
import species from '../filter/Category/species';

const card = ({ results, page }) => {
    let display;
    if(results){
        display = results.map(x =>{
            let {id, name, image,gender,species,type, location, status} = x
            return(<Link style={{
                textDecoration: "none"
            }} to={`${page}${id}`} key={id} className='position-realtive text-dark col-lg-4 col-md-6 col-sm-12 mb-4'>
                <div className= { `${styles.card} d-flex flex-column justify-content-center`}>
                    <img src={image} alt={name} className={`${styles.img} img-fluid`}></img>
                    <div className={`${styles.content} content`}>
                        <div className='fs-4 fw-bold mb-4'>{name}</div>
                        <div className=''>
                            <div className='fs-6 fw-bold'>Status</div>
                            <div className='fs-5'>{status}</div>
                        </div>
                        <div className=''>
                            <div className='fs-6 fw-bold'>Gender</div>
                            <div className='fs-5'>{gender}</div>
                        </div>
                        <div className=''>
                            <div className='fs-6 fw-bold'>Species</div>
                            <div className='fs-5'>{species}</div>
                        </div>
                        <div className=''>
                            <div className='fs-6 fw-bold'>Type</div>
                            <div className='fs-5'>{type===""? 'Unknown' : type}</div>
                        </div>
                        <div className=''>
                            <div className='fs-6 fw-bold'>Last location</div>
                            <div className='fs-5'>{location.name}</div>
                        </div>
                    </div>
                </div>
            </Link>)
        });

    }
    else{
        display = 'No Character found :/' 
    }

  return (
    <>{display}</>
    

  )
}

export default card
