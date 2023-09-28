import React from 'react';

function SearchForm() {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:text-slate-600	 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="TV Show or Serie..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-[#2FBBAA] rounded-lg hover:bg[#2FBBAA] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#2FBBAA] dark:hover:bg-[#2FBBAA] dark:focus:bg-[#2FBBAA]"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}

export default SearchForm;
