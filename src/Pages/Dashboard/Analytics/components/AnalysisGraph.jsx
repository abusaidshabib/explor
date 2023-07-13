/* eslint-disable react/prop-types */
import BarChart from "../../../../components/Charts/BarChart";

const AnalysisGraph = ({ value, totalUsage }) => {



  return (
    <div className="grid grid-cols-5 gap-10 py-10">
      <div className="col-span-3">
        <div className="py-10">
          <p className="text-xl font-bold text-dark-100 dark:!text-light-100 capitalize">
            Total usage (USD){" "}
            <span className="text-3xl pb-1 text-blue-100"> $ {totalUsage} </span>
          </p>
        </div>
        <BarChart bar={value?.formattedData} />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default AnalysisGraph;
