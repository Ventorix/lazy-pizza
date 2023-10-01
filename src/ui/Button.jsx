import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full text-sm  bg-indigo-600 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:border-stone-900 hover:bg-indigo-800 focus:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-1 active:bg-indigo-800 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4",
    small: base + " px-4 text-xs py-2 sm:text-sm md:px-5 md:py-2.5",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-500 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:border-stone-600 hover:text-stone-600 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-600 focus:text-stone-600 focus:ring-offset-1 active:bg-indigo-400 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-4 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
