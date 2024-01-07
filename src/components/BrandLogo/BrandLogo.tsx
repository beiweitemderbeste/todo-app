const BrandLogo: React.FC = () => {
  return (
    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-indigo-600 font-bold text-2xl uppercase px-4">
          REACT TODO APP
        </h1>
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
  );
};

export default BrandLogo;
