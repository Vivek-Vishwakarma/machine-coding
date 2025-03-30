import React, { useEffect, useRef, useState } from "react";

let INPUT = 5;
const Otp = () => {
  const [input, setInput] = useState(new Array(INPUT).fill(""));
  const inputRefs = useRef([]); // Array of refs
  const inputChange = (e, i) => {
    if (isNaN(e)) return;
    setInput((prevItems) => {
      const newItems = [...prevItems];
      newItems[i] = e.slice(-1);
      inputRefs.current[i + 1]?.focus();
      return newItems;
    });
  };
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  const handleKeyDown = (event, i) => {
    if (event.key === "Backspace") {
      setInput((prevItems) => {
        const newItems = [...prevItems];
        newItems[i] = "";
        return newItems;
      });
      inputRefs.current[i - 1]?.focus();
      console.log(input);
    }
  };
  return (
    <>
      {input.map((elem, i) => (
        <input
          onChange={(e) => inputChange(e.target.value, i)}
          key={i}
          value={elem}
          className="inputOTP"
          type="text"
          ref={(el) => (inputRefs.current[i] = el)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </>
  );
};

export default Otp;
