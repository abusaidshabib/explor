import { useSelector } from "react-redux";
import AnalysisGraph from "./components/AnalysisGraph";
import InputAnalytics from "./components/InputAnalytics";
import { useState } from "react";

const Analytics = () => {

  const [value, setValue] = useState();

  if(!value?.error){
    console.log(value)
  }

  return (
    <div>
      <InputAnalytics setValue={setValue}/>
      <AnalysisGraph value={value} totalUsage={value?.usageData?.total_usage} />
    </div>
  );
};

export default Analytics;
