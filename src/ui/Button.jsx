import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const classes =
    "inline-block rounded-full  bg-indigo-600 px-4 py-3 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:border-stone-900 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-1 active:bg-indigo-800 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export default Button;
