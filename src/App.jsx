import { useState } from "react";

import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="centered-content">
          <div className="circle-container">
            <motion.div
              animate={{ x: 30 }}
              transition={{ duration: 2 }}
              className="circle2"
            ></motion.div>
            <motion.div
              animate={{ x: 4 }}
              transition={{ duration: 2 }}
              className="circle1"
            ></motion.div>
          </div>
          <div className="circle-container">
            <motion.div
              animate={{ x: 0, y: 50 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8, rotate: 360 }}
              className="x-text"
            >
              x
            </motion.div>
            <motion.div
              animate={{ x: 10, y: 80 }}
              transition={{ duration: 2 }}
              className="main-text"
            >
              CELERATE
            </motion.div>
            <motion.div
              animate={{ x: 30, y: 140 }}
              transition={{ duration: 2 }}
              className="tech-text"
            >
              Technologies
            </motion.div>
            <motion.div
              animate={{ x: 30, y: 180 }}
              transition={{ duration: 2 }}
              className="large-text"
            >
              Transferring ideas into innovation
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
