import { Link } from "react-router-dom";

const SigningButtons = () => {
  return (
    <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 px-4">
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
  );
};

export default SigningButtons;
