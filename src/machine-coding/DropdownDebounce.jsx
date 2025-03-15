import React, { useEffect, useState } from "react";

const DropdownDebounce = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [focus, setFocus] = useState(false);
  const [cache, setCache] = useState({});
  const [loading, setLoading] = useState(false);

  const getProduct = () => {
    setProducts([]);
    if (cache[query]) {
      setProducts(cache[query]);
      return;
    }
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCache((prev) => ({ ...prev, [query]: data.products }));
        setLoading(false);
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        getProduct();
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <>
      <input
        name="debounce-dropdown"
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5"
        placeholder="Search ..."
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
      {focus && (
        <ul className="dropdown-container block w-50 p-2">
          {loading && <p>Loading...</p>}
          {!loading &&
            (products.length == 0
              ? "No Data Found"
              : products.map((e) => <li key={e.id}>{e.title}</li>))}
        </ul>
      )}
    </>
  );
};

export default DropdownDebounce;
