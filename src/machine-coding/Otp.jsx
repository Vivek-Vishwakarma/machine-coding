import React, { useEffect, useRef, useState } from "react";

let INPUT = 5;
const Otp = () => {
  const [input, setInput] = useState(new Array(INPUT).fill(""));
  const inputRefs = useRef([]);
  const inputChange = (e, i) => {
    if (isNaN(e) || e == " ") return;
    const newItems = [...input];
    newItems[i] = e.slice(-1);
    e && inputRefs.current[i + 1]?.focus();
    setInput(newItems);
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleKeyDown = (event, i) => {
    if (!event.target.value && event.key === "Backspace") {
      inputRefs.current[i - 1]?.focus();
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
