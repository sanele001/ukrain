import { Chart } from "react-google-charts";
import styles from "../../styles/Home.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Fields {
  Hcontribution: number;
  financial: number;
  military: number;
  country: string;
}

const United: React.FC<{ unitedstate: Fields[] }> = ({ unitedstate }) => {
  let amr: any = [["type", "Density", { role: "style" }]];
  unitedstate.map((value) => {
    const item1 = ["Military", value.military, "blue"];
    const item2 = ["Financial", value.financial, "yellow"];
    const item3 = ["Humanitarian", value.Hcontribution, "red"];
    amr.push(item1, item2, item3);
  });
  const data = [
    ["Military", 2000, "blue"], // RGB value
    ["Financial", 1000, "yellow"], // English color name
    ["Humanitarian", 800, "red"],
  ];

  const options = {
    backgroundColor: "",
    chartArea: {
      top: "3%",
      height: "80%",
      width: "80%",
    },
    vAxis: {
      textStyle: { color: "white" },
    },
    hAxis: {
      textStyle: { color: "white" },
    },
    legend: { position: "none" },
  };

  return (
    <section className="container">
      <Row>
        <Col md={10}>
          <h2 className={styles.title}>
            Aid to Ukraine from the United States since the war 2022, by type.
          </h2>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={amr}
            options={options}
          />
        </Col>
        <Col md={2}>
          <div className={styles.infoColumn}>
            <div>
              <strong>Survey period</strong>
              <p> 2022 oct 2021</p>
            </div>
            <div>
              <strong>Release date</strong>
              <p> 2022 oct 2021</p>
            </div>
            <div>
              <strong>Source</strong>
              <p> 2022 oct 2021</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default United;
