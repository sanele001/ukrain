import { Chart } from "react-google-charts";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import russia from "../../public/russia.png";
import ukrn from "../../public/ukrn.jpg";
import styles from "../../styles/Home.module.css";

function SpinnerLoader() {
  return (
    <div className={styles.loader}>
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="warning" />
    </div>
  );
}

const Map: React.FC<{ countrylist: string[]; contribution: number[] }> = ({
  countrylist,
  contribution,
}) => {
  let mapData: [string, string | number][] = [["Country", "Contribution"]];
  countrylist.map((country, index) => {
    // push to the pair arrey
    mapData.push([country, contribution[index]]);
  });

  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = mapData[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="100%"
              height="400px"
              data={mapData}
              options={{
                backgroundColor: "",
                colors: ["red"],
                title: "number of support in billions",
                titleText: { color: "white" },
              }}
              loader={<SpinnerLoader />}
            />
          </Col>
          <Col md={2}>
            <div className="introData">
              <Image
                src={russia}
                alt="Picture of the author"
                width={30}
                height={20}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <p className="introDataText">Population: 150m</p>
            </div>
            <div className="introData">
              <Image
                src={ukrn}
                alt="Picture of the author"
                width={30}
                height={20}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
              <p className="introDataText">Population: 150m</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
