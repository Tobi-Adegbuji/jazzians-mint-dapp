import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import { motion } from "framer-motion";

function Layout(props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div className={styles.layout}>
      
     
        {props.children}
    </div>
  );
}

export default Layout;
