const Toggler = ({ value, onClick }) => {
  return (
    <div className="ml-auto h-full flex flex-col justify-center align-middle">
      <button
        onClick={onClick}
        className="flex flex-col justify-center items-end gap-1.5 w-7 h-8 cursor-pointer"
      >
        <div
          className={`bg-white h-[2px] rounded transition-all duration-300 ${
            value ? "w-3/4" : "w-full"
          }`}
        ></div>
        <div
          className={`bg-white h-[2px] rounded transition-all duration-300 ${
            value ? "w-2/4" : "w-full"
          }`}
        ></div>
        <div
          className={`bg-white h-[2px] rounded transition-all duration-300 ${
            value ? "w-1/4" : "w-full"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default Toggler;
