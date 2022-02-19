// import React, { useState, useEffect } from "react";
// import React from "react";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./page/About";
import Cart from "./components/Cart";
import Login from "./page/Login";
import Home from "./page/Home";
import Registration from "./components/Registration";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  return (
    <div className="App">
      {/* {(user.email != "") ? (
        <div className = "welcome">
          <h2> Welcome <span> {user.name} </span></h2>
          <button onclick = {Logout}> Logout </button>


          </div>
      ) :(
        <Login setError={setError} setUser = {setUser} />
      )} */}

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />

                

                <Home />

                {/* <Login /> */}
                <Search 
                />
              </>
            }
          />
          <Route
            exact
            path="/About"
            element={
              <>
                <Header />

                <About />
              </>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <>
                <Header />
                <Registration />

                {/* <Cart /> */}
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Header />
                {user.email != "" ? (
                  <div className="welcome">
                    <h2>
                      {" "}
                      Welcome <span> {user.name} </span>
                    </h2>
                    <button onclick={Logout}> Logout </button>
                  </div>
                ) : (
                  <Login setError={setError} setUser={setUser} />
                )}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }

//     getProfiles();
//   }, [profiles]);

//   const renderProfile = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name}
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? (
//           profiles.map((profile) => renderProfile(profile))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
