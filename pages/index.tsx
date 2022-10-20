import type { NextPage, GetStaticProps } from "next";
import React, { useState } from "react";
import Map from "./components/map";
import FinanceChart from "./components/finance";
import Refuge from "./components/refuge";
import United from "./components/united";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Personel from "./components/personel";
import { Infomation } from "./components/context";

const myKey = process.env.KEY;

interface RootData {
  id: string;
  createdTime: Date;
  fields: Fields;
}

interface Fields {
  Hcontribution: number;
  financial: number;
  military: number;
  country: string;
}

const Home: NextPage<{
  countries: RootData[];
}> = ({ countries }) => {
  // start here
  // list ofcountries
  let listOfCountries: string[] = [];
  // list of financial contribution
  let contribution: number[] = [];

  let militaryaid: number[] = [];
  // function returning list of countries
  let america: Fields[] = [];
  countries.map((country) => {
    if (country.fields.country == "United States") {
      america.push(country.fields);
    }
  });

  countries.map((country) => listOfCountries.push(country.fields.country));
  // function returnng list of contribution
  countries.map((country) => contribution.push(country.fields.financial));
  countries.map((country) => militaryaid.push(country.fields.military));

  return (
    <Infomation>
      <Container>
        <button>countries</button>
        <Map countrylist={listOfCountries} contribution={contribution} />
        <Row>
          <h2 className={styles.title}>
            As of 04 september 2024 here's breakdown of the Ulrain conflict
            based on data collected from mainstream sources.{" "}
          </h2>
        </Row>
        <FinanceChart
          countrylist={listOfCountries}
          fcontribution={contribution}
          military={militaryaid}
        />
        <Personel />
        <Refuge />
        <United unitedstate={america} />
      </Container>
    </Infomation>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
  // Call an external API endpoint to get records.
  const res = await fetch(
    "https://api.airtable.com/v0/app3PsdwvJ624badu/countrydata",
    {
      headers: {
        Authorization: "Barear " + myKey,
      },
    }
  );
  const data = await res.json();

  const countries: RootData[] = data.records;
  //  returning { props: { value } },
  return {
    props: {
      countries,
    },
  };
};

export default Home;
