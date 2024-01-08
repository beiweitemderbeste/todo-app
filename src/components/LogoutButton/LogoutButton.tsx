const LogoutButton = () => {
  return (
    <span className="inline-flex rounded-md shadow ml-2">
      <button
        // Add your logout logic here
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        logout
      </button>
    </span>
  );
};

export default LogoutButton;
