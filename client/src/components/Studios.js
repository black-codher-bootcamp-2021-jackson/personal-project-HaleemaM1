import React from "react";

// AT THE END, PRODUCT COMPONENT WILL HAVE A NUMBER OF DIFFERENT PROPS.

export default function Studio (props) {
  return (
    <>
      <div id="resultsContainer">
        <div id="properties">
          {/* <img src={props.image} alt={props.studioName} /> */}
          <h4 className="studioName"> {props.studioName} </h4>
          <h3 className="type"> {props.type} </h3>
          <p className="location"> {props.location}</p>
          <p className="website">{props.website}</p>
        
        

          <div>
            

            <hr />
          </div>
        </div>
      </div>
    </>
  );
}