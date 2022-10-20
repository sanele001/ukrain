import { SiCounterstrike } from "react-icons/si";
import { useState, useEffect, useContext } from "react";
import { infomationContext } from "./context";
import { GiAk47 } from "react-icons/gi";
import styles from "../../styles/Home.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Rootdata {
  records: Record[];
  offset: string;
}

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

const Personel: React.FC = () => {
  const myData: Record[] = useContext(infomationContext);

  let cassualtyR;
  let cassualtyU;
  let equipR;
  let equipU;
  let source;
  let period;
  let release;
  // looking through object to assgn values to vr

  myData.map((value) => {
    switch (value.fields.country) {
      case "rassia":
        cassualtyR = value.fields.casualty;
        equipR = value.fields.equipment;
        break;
      case "ukrain":
        cassualtyU = value.fields.casualty;
        equipU = value.fields.equipment;
        source = value.fields.source;
        period = value.fields.period;
        release = value.fields.release;
        break;
    }
  });

  return (
    <section className="container">
      <Row>
        <Col md={10}>
          <div className={styles.personel}>
            <div className={styles.personelItem}>
              <h2>Combat casualties for Ukrain</h2>

              <SiCounterstrike color="white" size={60} />
              <SiCounterstrike color="yellow" size={60} />
              <SiCounterstrike color="blue" size={60} />
              <h2>{cassualtyU ? cassualtyU : "2000"}</h2>
            </div>
            <div className={styles.personelItem}>
              <h2>Combat casualties for Rassia</h2>

              <SiCounterstrike color="white" size={60} />
              <SiCounterstrike color="blue" size={60} />
              <SiCounterstrike color="red" size={60} />
              <h2>{cassualtyR ? cassualtyR : "2000"}</h2>
            </div>
          </div>
          <div className={styles.personel}>
            <div className={styles.personelItem}>
              <h2>equipment lost for Ukrain</h2>
              <p>last updated : 22/oct 2022</p>
              <GiAk47 color="white" size={60} />
              <GiAk47 color="yellow" size={60} />
              <GiAk47 color="blue" size={60} />
              <h2>{equipU ? equipU : "3000"}</h2>
            </div>
            <div className={styles.personelItem}>
              <h2>equipment lost for Russia</h2>
              <p>last updated : 22/oct 2022</p>
              <GiAk47 color="white" size={60} />
              <GiAk47 color="blue" size={60} />
              <GiAk47 color="red" size={60} />
              <h2>{equipR ? equipR : "4000"}</h2>
            </div>
          </div>
        </Col>
        <Col md={2}>
          <div className={styles.infoColumn}>
            <div>
              <strong>Survey period</strong>
              <p> {period ? period : "unkown"}</p>
            </div>
            <div>
              <strong>Release date</strong>
              <p> {release ? release : "unkown"}</p>
            </div>
            <div>
              <strong>Source</strong>
              <p>{source ? source : "unkown"}</p>
            </div>
          </div>
        </Col>
      </Row>
      <button onClick={() => console.log(myData)}>tejeejej</button>
    </section>
  );
};

export default Personel;
