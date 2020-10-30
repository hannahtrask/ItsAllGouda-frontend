import React from "react";
import "../scss/about.scss";

const About = (props) => {
  return (
    <div className="about">
      <h2 className="what">So... what is this?</h2>
      <p className="aboutp">
        We'll cut to the cheese, 'It's All Gouda' is an interactive just-for-fun
        app to cure your quarantine blues. Feeling sassy, punchy, happy or mad?
        Tell us, and we'll offer a meal suggestion that'll make you laugh, roll
        your eyes, or run to your nearest store. Don't like what we
        plated? Add your own food with the name, pic and description of your
        choosing. <br /> Zoom'd out? Got a crush? Scrolled past that social media debate (or started one...)? Add the foods that match your mood. Or, lettuce souprise you!<br /><br />
        <p className="aboutp2">Either way, It's All Gouda. Y'all bready for this?</p>
      </p>
    </div>
  );
};

export default About;
