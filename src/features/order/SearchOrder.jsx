import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-indigo-400 px-4 py-2 text-sm font-semibold text-stone-200 transition-all duration-300 placeholder:text-stone-200 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-offset-1 sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;
