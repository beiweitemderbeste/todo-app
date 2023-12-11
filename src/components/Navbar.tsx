import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-indigo-600 font-bold text-2xl uppercase">REACT TODO APP</h1>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">
        <Link
          to="/"
          className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          HOME
        </Link>
        <Link
          to="/error"
          className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          ERROR
        </Link>
      </div>
      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex">
          <Link
            to="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none transition duration-150 ease-in-out"
          >
            login
          </Link>
        </span>
        <span className="inline-flex rounded-md shadow ml-2">
          <Link
            to="/register"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:indigo-blue-700 transition duration-150 ease-in-out"
          >
            register
          </Link>
        </span>
      </div>
    </nav>
  );
}
