import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full  bg-indigo-600 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:border-stone-900 hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-1 active:bg-indigo-800 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 text-xs py-2 sm:text-sm md:px-5 md:py-2.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
