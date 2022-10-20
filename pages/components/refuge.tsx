import { Chart } from "react-google-charts";
import { useContext } from "react";
import { infomationContext } from "./context";
import styles from "../../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Record {
  id: string;
  createdTime: Date;
  fields: Fields;
}
interface Fields {
  country?: string;
  equipment?: number;
  casualty?: number;
  refugees?: number;
  period?: Date;
  source?: string;
  release?: Date;
}

export default function Refuge() {
  const myData: Record[] = useContext(infomationContext);

  let ukrainRef;
  let rassiaRef;
  let source;
  let release;

  let period;
  myData.map((value) => {
    switch (value.fields.country) {
      case "ukrain":
        ukrainRef = value.fields.refugees;
        source = value.fields.source;
        release = value.fields.release;
        period = value.fields.period;

        break;

      case "rassia":
        rassiaRef = value.fields.refugees;
        break;
    }
  });
  const data = [
    ["Refugees from Rassia", "Refugees from Ukrain"],
    ["Refugeees from Ukrain", ukrainRef],
    ["Refugess to russia", rassiaRef],
  ];

  const options = {
    chart: {
      title: "Company ",
    },
    backgroundColor: "",
    chartArea: {
      left: "3%",
      top: "3%",
      height: "90%",
      width: "90%",
    },
    legendTextStyle: { color: "white" },
  };
  return (
    <section className="container">
      <Row>
        <Col md={10}>
          <h2 className={styles.title}>
            Cumulative number of border crossings from and to Ukraine after
            Russia's invasion from February 24 to October 11, 2022
          </h2>
          <Chart
            chartType="PieChart"
            width=""
            height="400px"
            data={data}
            options={options}
          />
        </Col>
        <Col md={2}>
          <div className={styles.infoColumn}>
            <div>
              <strong>Survey period</strong>
              <p> {period}</p>
            </div>
            <div>
              <strong>Release date</strong>
              <p> {release}</p>
            </div>
            <div>
              <strong>Source</strong>
              <p> {source}</p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
