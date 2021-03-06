import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  
  const dataValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
