import React from "react";
import { useState } from "react";
import { findByType} from "../services/studioService";
import StudioList from "../components/StudiosList";
import "../style/Search.css";
import axios from "axios";


const Search = (props) => {
  const [term, setTerm] = useState("");
  const [studios, setStudios] = useState([]);
  const [results, setResults] = useState ([]);
console.log(results)
  const getStudios = async () => {
    const response = await axios.get(`/api/studios`);
  
    //We use axios to fetch our API, make get requiest to back end,
    setResults (response.data.filter((studioObject) => Array.from(studioObject.type[0].split(/(?: |,)+/)).includes(term)))
    
  console.log(results)

  // response.data.map((studioObject) => {
  //   const typeArray =studioObject.type[0].split(/(?: |,)+/)
  //   console.log(typeArray)

  // })
  // {
  //   
  //   // console.log(typeArray)
  //   // const spaceTrimmed= typeArray.map((result) => console.log(result.trim()))
  //   // console.log(spaceTrimmed)

  //   const searchResults = typeArray.filter((result) => result.trim()=== 'Boxing' )
  //   return searchResults;
  //   console.log(searchResults)
  //   if(searchResults) {
  //     console.log(studioObject)
  //   } 
  //   else{console.log('boxing not found')}
  //   return response.data || []; //if something is wrong with data then reurn an empty array
  // });
  }
//   async function findSong(value) {
//     const url = `https://itunes.apple.com/search?term=${value}`;

//     const response = await fetch(url).then((res) => res.json());


//     if (!response.error) {
//       props.setItems(response.results);
//       console.log(response);
//     }
//   }

const submitHandler = async (e) => {
  // e.preventDefault();
  const response = await findByType(term);
  console.log(response);
  setStudios(response)
}


  function handleSubmit(event) {
    console.log(event.target)
    event.preventDefault();
    // const input = event.target.value
    // setTerm(input);
    submitHandler()
  }

  return (
    <div>
      <>

     
        <form id="searchAPI" onSubmit={handleSubmit}>
          <input 
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="find an activity"
            id="term"
          />

          <button id="submit1" type="submit" onClick = {getStudios}> 
            {" "}
            Search here{" "}
          </button>
        </form>
        <h2 className="searching"> Searching for {term} </h2>
      </>
<>
    <StudioList
    
    studios = {results}/>
</>

    </div>
  );
};
export default Search;



