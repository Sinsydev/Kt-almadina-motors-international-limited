 import { useState } from "react";
import { Search } from "lucide-react"; // nice modern icon

function ProductFilter({ onFilter }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center gap-2 w-full max-w-md mx-auto mb-6"
    >
      {/* Input */}
      <input
        type="text"
        placeholder="Search car by name, brand, year..."
        value={query}
        onChange={handleChange}
        className="mt-9 flex-1 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-900 outline-none text-sm sm:text-base"
      />

      {/* Search button */}
      <button
        type="submit"
        className=" mt-9 flex items-center gap-2 px-4 py-2 bg-red-900 text-black rounded-2xl shadow-md hover:bg-red-400 transition-all"
      >
        <Search size={18} />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}

export default ProductFilter;









