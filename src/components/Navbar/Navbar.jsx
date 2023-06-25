import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-center rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-gray-800">
      <div>

      </div>
    </nav>
  );
};

export default Navbar;
