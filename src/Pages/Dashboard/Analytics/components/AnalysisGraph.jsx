/* eslint-disable react/prop-types */
import BarChart from "../../../../components/Charts/BarChart";

const AnalysisGraph = ({ value, totalUsage, sub, averageTraffic }) => {
    console.log(sub)
  return (
    <div className="grid grid-cols-5 gap-10 py-10">
      <div className="col-span-3">
        <div className="py-10">
          <p className="text-xl font-bold text-dark-100 dark:!text-light-100 capitalize">
            Total usage (USD){" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
              $ {totalUsage}{" "}
            </span>
          </p>
          <p className="text-xl font-bold text-dark-100 dark:!text-light-100 capitalize">
          averageTraffic {" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
               {averageTraffic}{" "}
            </span>
          </p>
        </div>
        <BarChart bar={value?.formattedData} />
      </div>
      <div className="col-span-2">
        <div className="py-10">
          <p className="text-xl font-bold text-dark-100 dark:!text-light-100 capitalize">
            Cost usage{" "}
          </p>
        </div>
        <div className="p-14 w-full h-96 shadow-xl border dark:bg-dark-50 dark:border-gray-500 dark:placeholder-light-100 dark:text-light-100">
          <p className="text-lg font-bold text-dark-100 dark:!text-light-100 capitalize">
            access_until {" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
                &nbsp;{sub?.access_until}{" "}
            </span>
          </p>
          <br/>
          <p className="text-lg font-bold text-dark-100 dark:!text-light-100 capitalize">
          soft_limit: {" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
                &nbsp;{sub?.soft_limit}{" "}
            </span>
          </p>
          <br/>
          <p className="text-lg font-bold text-dark-100 dark:!text-light-100 capitalize">
          hard_limit {" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
                &nbsp;{sub?.hard_limit}{" "}
            </span>
          </p>
          <br/>
          <p className="text-lg font-bold text-dark-100 dark:!text-light-100 capitalize">
          system_hard_limit {" "}
            <span className="text-3xl pb-1 text-blue-100">
              {" "}
                &nbsp;{sub?.system_hard_limit}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisGraph;
