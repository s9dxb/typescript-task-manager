import React, { useState } from "react";
import styles from "./styles.css";

const InputField = () => {
  const [todo, setTodo] = useState("");

  return (
    <form className="input">
      <input type="text" placeholder="Enter a Task" className="input__box" />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
