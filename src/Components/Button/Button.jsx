import React from "react";
import styles from "./button.module.css";

function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Give Feedback
    </button>
  );
}

export default Button;