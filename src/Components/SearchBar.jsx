import React from "react";

function SearchBar() {
  return (
    <>
      <form className="flex items-center">
        <div className="relative w-80 flex">
          <input
            type="search"
            id="voice-search"
            className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search"
            required
          />
          {/* </div> */}
          {/* <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
          <div className="inline-flex items-center py-2.5  text-sm font-medium text-white rounded-lg">
            <svg
              className="w-4 h-4 me-2 -m-12 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            {/* </button> */}
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
