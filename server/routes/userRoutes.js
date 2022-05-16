const mongoose = require("mongoose");
const Profile = mongoose.model("profiles");
// console.log('hello')

//Login
const userRoutes = (app) => {
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Profile.findOne({ email: email, password: password });
      
      return res.status(200).send({
        error: false,
        message : "success"

      });
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: "Incorrect email or password",
      });
    }
  });

  

  //Create User
  app.post(`/api/profile`, async (req, res) => {
    try {
      const profile = await Profile.create(req.body);

      return res.status(201).send({
        error: false,
        profile,
      });
    } catch (error) {
      return res.status(400).send({
        error: true,
        message: "Email already exists",
      });
    }
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = userRoutes;
