import React, { useEffect, useState } from "react";

const Pagination = () => {
  const LIMIT = 10;
  let [currPage, setCurrPage] = useState(1);
  let [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  let pages = [];
  for (let index = 1; index <= totalPage; index++) {
    pages.push(index);
  }
  function nextPage() {
    setCurrPage(currPage + 1);
  }
  function prevPage() {
    setCurrPage(currPage - 1);
  }
  async function getProducts(e) {
    setProducts([]);
    setCurrPage(e);
    let res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT * e}`
    );
    let data = await res.json();
    setProducts(data?.products);
    setTotalPage(Math.floor(data?.total/LIMIT));
  }
  useEffect(() => {
    getProducts(currPage);
  }, [currPage]);
  return (
    <div>
      <div className="prod-container">
        {products.length == 0
          ? "Loading ..."
          : products.map((e) => (
              <div className="prod" key={e.id}>
                <img src={e.thumbnail} alt="" />
                <span>{e.title}</span>
              </div>
            ))}
      </div>
      <div className="pg-container">
        <button
          disabled={currPage == 1}
          onClick={prevPage}
          className="pg-element"
        >
          Prev
        </button>
        {pages.map((e) => (
          <span
            onClick={() => setCurrPage(e)}
            className={"pg-element " + (currPage == e ? "pg-active" : "")}
            key={e}
          >
            {e}
          </span>
        ))}
        <button
          disabled={currPage == totalPage}
          onClick={nextPage}
          className="pg-element"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
