import {BsSearch} from "react-icons/bs";
import {AiOutlineDown} from "react-icons/ai";

const InputAnalytics = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="w-full grid grid-cols-3">
        <div></div>
        <div>
          <label
            className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
            htmlFor="start-date"
          >
            Add start date
          </label>
          <input
            className="w-full p-3 h-16 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 shadow-lg border-y border-l dark:border-gray-500  border-gray-200"
            type="date"
            name="start-date"
            id="start-date"
          />
        </div>
        <div>
          <label
            className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
            htmlFor="start-date"
          >
            Add end date
          </label>
          <input
            className="w-full p-3 h-16 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 shadow-lg border-y dark:border-gray-500  border-gray-200 focus:border-light-100"
            type="date"
            name="start-date"
            id="start-date"
          />
        </div>
        <div>
          <label
            className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
            htmlFor="start-date"
          >
            Timeline
          </label>
          <select className="bg-light-50 h-16 border-y border-r border-gray-200 text-dark-100 focus:ring-light-100 focus:border-light-100 block w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg">
            <option value="">Last 7 days</option>
            <option value="">Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Timeline
        </label>
        <button
          // onClick={()=> select}
          className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg text-left flex items-center justify-between"
          htmlFor="start-date"
        >
          <span>Model Types</span>
          <AiOutlineDown/>
        </button>

        {/* Select with multiple radio button */}
        <div className="w-full bg-light-100">
          <div className="flex">
            <p className="h-16 px-5 text-dark-100 dark:!bg-dark-50 dark:!text-light-100 dark:border-gray-500 bg-light-50 grid place-content-center border-y border-l">
              <BsSearch />
            </p>
            <input
              className="p-3 h-16 w-full dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="text"
              name="start-date"
              id="start-date"
            />
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Instruct Models
            </label>
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Chat models
            </label>
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Fine-tuned models
            </label>
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Embedding models
            </label>
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Image models
            </label>
          </div>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="radio"
              name=""
              id="default-radio-1"
              placeholder=""
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-base text-dark-100 dark:!text-light-100"
            >
              Audio models
            </label>
          </div>
        </div>
      </div>
      <div className="">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Selected Data
        </label>
        <select className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 block w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg">
          <option value="">Timeline</option>
          <option value="">Last 7 days</option>
          <option value="">Last 30 days</option>
        </select>
      </div>
    </div>
  );
};

export default InputAnalytics;
