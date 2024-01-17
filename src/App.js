import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filter from "./components/filter/filter"
import Cards from "./components/card/card"
import Pagination from "./components/pagination/pagination"
import Search from "./components/search/search"
import Navbar from "./components/navbar/navbar"
import { useEffect, useState } from "react"
import Episode from "./pages/episode"
import Location from "./pages/location"
import CardDetails from './components/card/carddetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react"


function App() {
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/:id" element = {<CardDetails/>}/>
        <Route path="/episode" element = {<Episode/>}/>
        <Route path="/episode/:id" element = {<CardDetails/>}/>
        <Route path="/location" element = {<Location/>}/>
        <Route path="/location/:id" element = {<CardDetails/>}/>
      </Routes>
    </Router>
  )
}


const Home = () =>{
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchdata, updatefetchdata] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let { info, results } = fetchdata;
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() =>{
    (async function(){
      let data = await fetch(api).then(res=>res.json())
      updatefetchdata(data);
    })()
  },[api]) 
  return (
    <div className="App">
    
      <h2 className="text-center">
        Home Page
      </h2>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          
            <Filter setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
          
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
