import { AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleCheckbox } from "../../../../features/input/checkboxSlice";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const InputAnalytics = ({setValue}) => {
  const currentDate = new Date();
  const end = currentDate.toISOString().slice(0, 10);

  const start = new Date(currentDate);
  start.setDate(start.getDate() - 30);
  const thirtyDaysAgo = start.toISOString().slice(0, 10);

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(end);
  const [apiKey, setApiKey] = useState();
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = (checkboxValue) => {
    dispatch(toggleCheckbox(checkboxValue));
  };

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${apiKey}`, // Replace openaiApiKey with your actual API key
    };

    fetch(
      `https://explore-api.vercel.app/usage?start_date=${startDate}&end_date=${endDate}`,
      {
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, [endDate, startDate, apiKey, dispatch, setValue]);

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="w-full">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Enter OpenAI Key
        </label>
        <input
          className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg text-left flex items-center justify-between"
          type="text"
          name=""
          id=""
          placeholder="Enter Api key"
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>
      <div className="w-full">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Enter Start Date
        </label>
        <input
          className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg text-left flex items-center justify-between"
          type="date"
          name=""
          id=""
          placeholder="Enter Start date"
          onChange={(e) => setStartDate(e.target.value)}
          defaultValue={startDate}
        />
      </div>
      <div className="w-full">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Enter End date
        </label>
        <input
          className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg text-left flex items-center justify-between"
          type="date"
          name=""
          id=""
          placeholder="Enter End date"
          onChange={(e) => setEndDate(e.target.value)}
          defaultValue={endDate}
        />
      </div>
      <div className="grid">
        <label
          className="block text-xl mb-3 font-medium text-dark-100 dark:text-light-100"
          htmlFor="start-date"
        >
          Models
        </label>
        <button
          onClick={() => setDisplay(!display)}
          className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg text-left flex items-center justify-between"
          htmlFor="start-date"
        >
          <span>Model Types</span>
          <AiOutlineDown />
        </button>

        {/* Select with multiple radio button */}
        <div className={display ? "w-full bg-light-100" : "hidden"}>
          <div className="flex items-center px-4 dark:!bg-dark-50 bg-light-50 border dark:border-gray-500">
            <input
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Instruct Models"
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
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Chat models"
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
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Fine-tuned models"
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
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Embedding models"
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
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Image models"
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
              onClick={(e) => handleCheckboxChange(e.target.value)}
              className="p-3 h-16 w-8 dark:!bg-dark-50 outline-none text-dark-100 dark:!text-light-100 border-y border-r dark:border-gray-500  border-gray-200"
              type="checkbox"
              name=""
              placeholder=""
              value="Audio models"
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
          Selected Timeline
        </label>
        <select className="bg-light-50 h-16 border border-gray-200 text-dark-100 text-sm focus:ring-light-100 focus:border-light-100 block w-full p-2.5 dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100 outline-none shadow-lg">
          <option value="">Timeline</option>
          <option value="">Last 30 days</option>
        </select>
      </div>
    </div>
  );
};

export default InputAnalytics;
