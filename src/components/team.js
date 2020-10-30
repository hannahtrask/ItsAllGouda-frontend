import React from "react";
import "../scss/team.scss";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div id="chaseandgals">
      <div id="kilahbox">
        <h2 className="kilahname">Kilah</h2>
        <h3>Backend Baller</h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: [0.9, 1.5, 1],
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <img
            className="kilah"
            src="https://i.ibb.co/9rDfC0m/Kilah-mask.png"
            alt="Kilah-mask"
            border="0"
          />
          <p className="kp">
            As a lifelong dancer, Kilah’s jam <br />
            is art in any form -
            <br />
            especially when it pushes limits.
            <br /> She also loves conquering one <br />
            big physical challenge per year. Kilah gets a <br />
            kick out of being
            <br /> pushed to and past her breaking point, <br />
            and the cohort certainly checked
            <br />
            that box. She is excited to add
            <br /> programming to her creativity and <br />
            management experience.
            <br />
            <br />
            Backend balling aside, Kilah loved bringing
            <br /> a ‘voice’ to the team’s app. Give those food descriptions
            <br />
            and ‘about the app’ a read. She hopes they make you smile.
          </p>
        </motion.div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="hannahbox">
        <h2 className="kilahname">Hannah</h2>
        <h3>Frontend Phenom</h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: [0.9, 1.5, 1],
              opacity: 1,
              transition: {
                delay: 1.5,
              },
            },
          }}
        >
          <img
            className="hannah"
            src="https://i.ibb.co/pK6J7x3/Hannah-mask.png"
            alt="Hannah-mask"
            border="0"
          />
          <p className="hp">
            Hannah is a whitewater raft guide <br />
            turned software engineer. When she's not <br />
            studying with General Assembly, <br />
            she's spending time outside, pursuing <br />
            another new hobby or chatting with <br />
            friends over a large glass of wine. <br />
            For this full stack project, Hannah <br />
            managed the team GitHub and tried her <br />
            best to embody a true renaissance woman,
            <br /> dabbling a little in all aspects of <br />
            the project.
            <br />
            <br />
            Her pride and joy is the random pun generator— <br />
            refresh the page and <br />
            see her handiwork in action.
          </p>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="chasebox">
        <h2 className="kilahname">Chase</h2>
        <h3>Stateful Statesman</h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: [0.9, 1.5, 1],
              opacity: 1,
              transition: {
                delay: 2.9,
              },
            },
          }}
        >
          <img
            className="chase"
            src="https://i.ibb.co/tzYgXtk/Chase-mask.png"
            alt="Chase-mask"
            border="0"
          />
          <p className="cp">
            Chase is your average rock climbing
            <br /> enthusiast and wanna be software
            <br />
            engineer. When he's not scaling
            <br /> tall cliffs, drinking
            <br /> another random beer with a <br />
            cool looking label
            <br /> (because everyone knows thats <br />
            the most important part). <br />
            You can find him hunched over his <br />
            keyboard coding
            <br /> away into the wee hours of the night to <br />
            finish his homework at General Assembly. <br />
            Chase spent most of him time fighting with the forms, <br />
            api and general functionality
            <br /> all the while hoping his code stays together
            <br /> long enough to show the project <br />
            at presentation time.
            <br /> Finally getting to see individual <br />
            foods being updated with <br />
            the form he created was a <br />
            huge relief and moment of joy for Chase!
          </p>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="sarabox">
        <h2 className="kilahname">Sara</h2>
        <h3>Design Duchess</h3>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: [0.9, 1.5, 1],
              opacity: 1,
              transition: {
                delay: 3.9,
              },
            },
          }}
        >
          <img
            className="sara"
            src="https://i.ibb.co/xLjfm5s/Sara-mask.png"
            alt="Sara-mask"
            border="0"
          />
          <p className="sp">
            {" "}
            Sara's passion has revolved around
            <br /> the music industry, graphic design
            <br />
            and festivals in the Atlanta area. <br />
            She has always had a curiosity for
            <br />
            how computers and how machines work, with a<br /> borderline
            compulsive urge
            <br />
            to take video gear apart. During this
            <br /> General Assembly project, she has
            <br />
            enjoyed designing and styling the App
            <br /> with her amazing team and helping
            <br />
            think out logic behind functionality.
            <br />
            <br />
            Long live little Cheeseman!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
