import { Chart } from "react-google-charts";
import { motion } from "framer-motion";
const FinanceChart: React.FC<{
  countrylist: string[];
  fcontribution: number[];
  military: number[];
}> = ({ countrylist, fcontribution, military }) => {
  let fData: [string, string | number, string | number][] = [
    ["Country", "Finacial Aid in billions", "Military aid in Billions"],
  ];
  countrylist.map((country, index) => {
    // finding an index to conditionally mix pairs from two arreys
    const itemIndex: number = countrylist.indexOf(countrylist[index]);
    // push to the pair arrey
    fData.push([country, fcontribution[index], military[index]]);
  });

  const options = {
    title: "Financial and military aid by country for Ukrain to date",
    backgroundColor: "",

    chartArea: { width: "70%" },
    hAxis: {
      title: "Total Population",
      minValue: 0,
      baselineColor: "white",
      textStyle: { color: "#FFF" },
    },
    vAxis: {
      title: "City",
      textStyle: { color: "#FFF" },
    },

    titleTextStyle: {
      color: "white",
      fontSize: 30,
    },
    legend: {
      maxLines: 3,
      textStyle: {
        color: "#ffffff",
      },
    },
    animation: {
      startup: true,
      easing: "linear",
      duration: 3000,
    },
  };

  return (
    <div className="">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={fData}
        options={options}
      />
    </div>
  );
};

export default FinanceChart;
