import React from "react";

const FlatteningObj = () => {
  let user = {
    name: "Vishal",
    address: {
      primary: {
        flat: "12",
        house: "109",
        street: {
          main: "21",
          cross: "32",
        },
      },
    },
  };

  let flattenObj = {};
  function flattenObjFn(user, preFix = "") {
    Object.keys(user).forEach((elem) => {
      let newKey = preFix ? `${preFix}.${elem}` : elem;
      if (typeof user[elem] == "object" && Object.keys(user[elem]).length > 0) {
        flattenObjFn(user[elem], newKey);
      } else {
        flattenObj[newKey] = user[elem];
      }
    });
    return flattenObj;
  }

  let hello = flattenObjFn(user);
  return (
    <div className="flat">
      {JSON.stringify(user)}
      <hr />
      {JSON.stringify(hello)}
    </div>
  );
};

export default FlatteningObj;
