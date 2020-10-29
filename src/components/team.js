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
        <p className="kp"></p>
      </div>

      <div className="hannahbox">
        <h2 className="kilahname">Hannah</h2>
        <h3>Frontend Phenom</h3>
        <img
          className="hannah"
          src="https://i.ibb.co/pK6J7x3/Hannah-mask.png"
          alt="Hannah-mask"
          border="0"
        />
        <p className="hp">
          Hannah is a whitewater raft guide turned software engineer. When she's
          not <br />
          studying with General Assembly, she's spending time outside, pursuing{" "}
          <br />
          another new hobby or chatting with friends over a large glass of wine.{" "}
          <br />
          For this full stack project, Hannah managed the team GitHub and tried
          her <br />
          best to embody a true renaissance woman, dabbling a little in all
          aspects of <br />
          the project.
          <br />
          <br />
          Her pride and joy is the random pun generator— refresh the page and{" "}
          <br />
          see her handiwork in action.
        </p>
      </div>

      <div id="chasebox">
        <h2 className="kilahname">Chase</h2>
        <h3>Stateful Statesman</h3>
        <img className="chase" src="https://i.ibb.co/tzYgXtk/Chase-mask.png" alt="Chase-mask" border="0">"></https:>
        <p className="cp">Chase is your average rock climbing enthusiast and wanna be software<br />
         engineer. When he's not scaling tall cliffs, drinking another random beer with a <br/>
         cool looking label (because everyone knows thats the most important part). <br />
         You can find him hunched over his keyboard coding away into the wee hours of the night to <br />
         finish his homework at General Assembly. Chase spent most of him time fighting with the forms, <br />
         api and general functionality all the while hoping his code stays together long enough to show the project <br/>
         at presentation time. Finally getting to see individual foods being updated with <br/>
         the form he created was a huge relief and moment of joy for Chase!</p>
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
        <p className="sp">
          {" "}
          Sara's passion has revolved around the music industry, graphic design
          <br />
          and festivals in the Atlanta area. She has always had a curiosity for
          <br />
          how computers and how machines work, with a borderline compulsive urge
          <br />
          to take video gear apart. During this General Assembly project, she
          has
          <br />
          enjoyed designing and styling the App with her amazing team and
          helping
          <br />
          think out logic behind functionality.
          <br />
          <br />
          Long live little Cheeseman!
        </p>
      </div>
    </div>
  );
};

export default Team;
