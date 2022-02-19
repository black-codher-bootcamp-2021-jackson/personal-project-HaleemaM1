import React from "react";
import Studio from "../components/Studios";

export default function StudioList(props) {
  return (
    <main>
     
      <div className="Studios">
        {props.studios.map((studio) => {
          return (
            <Studio
              studioName={props.studioName}
              type={props.type}
              location={props.location}
              website={props.website}
            />
          );
        })}
      </div>
    </main>
  );
}
