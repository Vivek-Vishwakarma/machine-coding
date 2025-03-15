import React from "react";
import { useFetch } from "./useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (error) {
    return <>Someting went wrong ...</>;
  }

  return (
    <>
      {loading ? (
        "Loading ..."
      ) : (
        <ul className="use-fetch">
          {data?.products.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CustomHook;
