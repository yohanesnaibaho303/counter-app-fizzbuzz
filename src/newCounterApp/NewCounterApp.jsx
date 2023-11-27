import React, { useState } from "react";

function DisplayCounter({ counter }) {
  return <p>{counter}</p>;
}

function MyButton({ text, action }) {
  return (
    <div>
      <button onClick={action}>{text}</button>
    </div>
  );
}

const NewCounterApp = () => {
  const [likes, setLikes] = useState(0);

  function handleIncrease() {
    setLikes(likes + 1);
  }

  function handleDecrease() {
    setLikes(likes - 1);
  }
  function handleReset() {
    setLikes(0);
  }
  return (
    <div>
      <MyButton text={"+"} action={handleIncrease} />
      <DisplayCounter counter={likes} />
      <MyButton text={"-"} action={handleDecrease} />
      <MyButton text={"reset"} action={handleReset} />
    </div>
  );
};

export default NewCounterApp;
