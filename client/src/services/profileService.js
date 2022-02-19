// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/api/profiles`);

  //We use axios to fetch our API, make get requiest to back end,

  return response.data || []; //if something is wrong with data then reurn an empty array
};

const createUser = async (user) => {
  const response = await axios.post('/api/profile',user);

  return response.data 
};



//files containing functions that carry out a service ot the entire applcaition, i.e. get response and communcate w/ API. communicate wit the functions.

const userLogin = async (username, password) => {
  const response = await axios.post('/api/login', {username, password});

  return response.data || [];

};



// All of the endpoints in this file can be exported below
export { getAllProfiles, createUser, userLogin };
