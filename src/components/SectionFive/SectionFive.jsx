import React from "react";
import "./sectionFive.css";

function SectionFive() {
  return (
    <div className="section-five">
      <div className="card">
        <div className="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Melanie_Joy%2C_September_2015_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <h3>Melanie Joy</h3>
        <p>
          “We love dogs and eat cows not because dogs and cows are fundamentally
          different--cows, like dogs, have feelings, preferences, and
          consciousness--but because our perception of them is different.”{" "}
        </p>
      </div>
      <div className="card">
        <div className="image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Joaquin_Phoenix-2196.jpg"
            alt=""
          />
        </div>
        <h3>Joaquin Phoenix</h3>
        <p>“It takes nothing away from a human to be kind to an animal.” </p>
      </div>
      <div className="card">
        <div className="image">
          <img
            src="https://media.lex.dk/media/30198/standard_compressed_Jane_Goodall.jpg"
            alt=""
          />
        </div>
        <h3>Jane Goodall</h3>
        <p>
          “Farm animals are far more aware and intelligent than we ever imagined
          and, despite having been bred as domestic slaves, they are individual
          beings in their own right. As such, they deserve our respect. And our
          help. Who will plead for them if we are silent?”
        </p>
      </div>
    </div>
  );
}

export default SectionFive;
