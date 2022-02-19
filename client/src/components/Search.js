import React from "react";
import { useState } from "react";
import { findByType} from "../services/studioService";
import StudioList from "../components/StudiosList";


const Search = (props) => {
  const [term, setTerm] = useState("");
  const [studios, setStudios] = useState([]);
  

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
            placeholder="Search Here"
            id="term"
          />

          <button id="submit1" type="submit">
            {" "}
            Search here{" "}
          </button>
        </form>
        <h2 className="searching"> Searching for {term} </h2>
      </>
<>
    <StudioList
    
    studios = {studios}/>
</>

    </div>
  );
};
export default Search;











