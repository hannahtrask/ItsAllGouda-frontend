import React from "react";
import "../scss/team.scss";

const Team = () => {
  return (
    <div id="chaseandgals">
      <div id="kilahbox">
        <h2 className="kilahname">Kilah</h2>
        <h3>Backend Baller</h3>
        <img
          className="kilah"
          src="https://i.ibb.co/9rDfC0m/Kilah-mask.png"
          alt="Kilah-mask"
          border="0"
        />
        <p className="kp">words words more words, food puns</p>
      </div>

      <div className="hannahbox">
        <h2 className="kilahname">Hannah</h2>
        <h3>Frontend Phenom</h3>
        <img className="hannah" src=""></img>
        <p className="hp">words words more words, food puns, <br /> lots of words words words brwordsdalk <br /> jfoldogdsoj;klsdjokdokldjjwgldkasjgikgnow </p>
      </div >

      <div id="chasebox">
        <h2 className="kilahname">Chase</h2>
        <h3>Stateful Statesman</h3>
        <img className="chase" src=""></img>
        <p className="cp">words words more words, food puns</p>
      </div>

      <div className="sarabox">
        <h2 className="kilahname">Sara</h2>
        <h3>Design Duchess</h3>
        <img
          className="sara"
          src="https://i.ibb.co/xLjfm5s/Sara-mask.png"
          alt="Sara-mask"
          border="0"
        />
        <p className="sp"> test words
        {/* Sara's passion has revolved around the music industry, graphic design
        and festivals in the Atlanta area. She has always had a curiosity for
        how computers and how machines work, with a borderline compulsive urge
        to take video gear apart. Her time spent in the immersive program at
        General Assembly was one of the best challenges of 2020. Learning a new
        skill that will allow her to grow more within the entertainment industry
        as well as being able to enter a new "world" is exactly the optimism and
        bright future the dull year needed. */}
        </p>
      </div>
    </div >
  );
};

export default Team;
