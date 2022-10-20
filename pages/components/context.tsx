import React, { useState, useEffect, createContext, Children } from "react";

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
export const infomationContext = createContext<Record[]>([]);

export const Infomation = (props: any) => {
  const [myinfo, setMyinfo] = useState<Record[]>([]);

  useEffect(() => {
    // cleanup var
    let cleanup = true;

    if (cleanup) {
      // the call
      apiCall();
    }

    return () => {
      cleanup = false;
    };
  }, []);
  // calling the api
  const apiCall = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app3PsdwvJ624badu/war?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keydANeIcMSXo1If5",
        },
      }
    );
    const data = await res.json();

    const info: Record[] = data.records;
    setMyinfo(info);
  };

  return (
    <infomationContext.Provider value={myinfo}>
      {props.children}
    </infomationContext.Provider>
  );
};
