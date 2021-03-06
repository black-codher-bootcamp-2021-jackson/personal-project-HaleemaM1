const mongoose = require("mongoose");
const Studio = mongoose.model("studios");
console.log('hello')
//Post login account for studios

const studioRoutes = (app) => {

  // app.get(`/profile`, (req, res) => {
  //   const profiles = 'profile';

  //   return res.status(200).send(profiles);
  // });

  app.get(`/api/studios`, async (req, res) => {
    const studio = await Studio.find(); 
    console.log(studio)
    return res.status(200).send(studio);
    
  });

  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Studio.findOne({ email: email, password: password });

      return res.status(200).send({
        error: false,
        message: "success",
      });
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: "Incorrect email or password",
      });
    }
  });

  


  //get request to return a specific type of excerise

  ////One of the functionalities for my applciation is for the user to search for th excercise of choice so one of the endpoints is a get request to find the type of excerise

  app.get("/api/studios/filterType", async (req, res) => {
    // console.log(req.params)
    // const typeValue = req.params.type;
    const query = {type:req.body.type}
    console.log(query)
    const typeExercise = await Studio.find(query).exec();
    console.log(typeExercise)

    return res.status(200).send(typeExercise);
    
    
  });



  
  //get all studios that match a certain id
  

  // app.get("/api/studios/:id", (req, res) => {
  //   const { _id } = req.params;
  //   const studioMatch = await Studio.find(_id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     studioMatch,
  //   });
  // });

  //post studio name, type and location. Sign up.

  //get request to return all studio information from database

  

  // app.get("/api/studio_name" (_,res) =>
  app.post(`/api/studio`, async (req, res) => {
    const newActivity = await Studio.insert();
  });

};

// Post - add a new studio to the data.


//studio.insert

module.exports = studioRoutes;