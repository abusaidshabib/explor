const Sidebar = () => {
  return (
    <div className="sm:none duration-150 fixed !z-50 flex min-h-full flex-col bg-white shadow-2xl shadow-white/5 transition-all dark:!bg-gray-800 dark:text-gray-200 md:!z-50 xl:!z-0 translate-x-0">
      <div className="mx-14 mt-12 flex items-center">
        <div className="uppercase text-gray-700 dark:text-gray-200 font-bold text-2xl">
          ex-<span className="font-medium">plan</span>
        </div>
      </div>

      <div className="mt-14 mb-7 h-px bg-gray-200 dark:bg-white/30">
        <ul className="mb-auto pt-1">

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;