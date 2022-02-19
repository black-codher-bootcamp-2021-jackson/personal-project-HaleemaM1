// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const studioLogin = async () => {
  const response = await axios.post(`/api/login`);

  //We use axios to fetch our API, make get requiest to back end,

  return response.data || []; //if something is wrong with data then reurn an empty array
};

const loginForStudio = async () => {};

// All of the endpoints in this file can be exported below


//files containing functions that carry out a service ot the entire applcaition, i.e. get response and communcate w/ API. communicate wit the functions.

// const findByType = async (type) => {
//     console.log(type)
//     const response = await axios.get('/api/studios/filterType', {params:type});

//     return response.data || [];
// };

const findByType = async (type) => {
    // const params = {
    // }
    console.log(type)
    const response = await axios.get(`/api/salons/filterType`, { params: type });
    return response.data || [];
  } 



const findExercisebyType = async () => {};


const findByID = async () => {
    const response = await axios.get('/api/studios/:id');
 return response.data || [];
};

const  matchID = async () => {};

export {studioLogin, loginForStudio, findByType, findExercisebyType, findByID, matchID}

