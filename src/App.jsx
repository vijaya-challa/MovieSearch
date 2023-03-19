
import './App.css';
import SearchIcon from './search.svg'
import { useState, useEffect } from 'react';
// import Person from './component/Person/Person';


const API_URL ='http://www.omdbapi.com?apikey=df5be08'

function App() {

  
    const serachMovies = async (title)=>{
try{
  const response = await fetch(`${API_URL}&s=${title}`)
  const data= await response.json()
  console.log(data.Search)
}catch(error){
  console.log(error.message)
}
    }

    useEffect(()=>{

      serachMovies('Spiderman')
    }, [])

 
  
  //  df5be08
  return (
    <div className="app">
      <h1>MovieLand</h1>

<div className='search'>
  <input type="text" placeholder='Search for movies'/>
</div>
    </div>
  );
}

export default App;
