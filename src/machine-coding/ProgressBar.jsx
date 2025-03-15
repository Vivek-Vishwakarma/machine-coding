import React from "react";

const ProgressBar = () => {
  let percentageArr = [0, 10, 30, 40, 80, 100];
  return (
    <>
      {percentageArr.map((e) => (
        <Progress key={e} percentage={e} />
      ))}
    </>
  );
};

const Progress = ({ percentage }) => {
  return (
    <>
      <div className="progress-container">
        <div
          className="progress-inner"
          style={{ width: percentage * 10 + "px" }}
        ></div>
        <div className="percentage">{percentage}%</div>
      </div>
    </>
  );
};

export default ProgressBar;
