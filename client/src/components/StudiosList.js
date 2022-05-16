import React from "react";
import Studio from "../components/Studios";

export default function StudioList(props) {
  return (
    <main>
      <div className="Studios">
        {props.studios.map((studio) => {
          return (
            <Studio
              studioName={studio.studio_name}
              type={studio.type}
              location={studio.location}
              website={studio.Website}
              image={studio.Image}
            />
          );
        })}
      </div>
    </main>
  );
}
