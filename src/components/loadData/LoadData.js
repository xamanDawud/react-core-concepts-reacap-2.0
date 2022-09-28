import React, { useEffect, useState } from "react";
import DisplayData from "../DisplayData/DisplayData";

const LoadData = () => {
  let datas = [
    {
      _id: "6334bc5f24a61fdc595a2b0b",
      name: "Brenda Dunlap",
      phone: "+1 (935) 499-3661",
    },
    {
      _id: "6334bc5f47d13120e3868906",
      name: "Isabella Mcintosh",
      phone: "+1 (992) 498-3169",
    },
    {
      _id: "6334bc5ffe66ef03fe52082c",
      name: "Maude Vasquez",
      phone: "+1 (881) 546-2873",
    },
    {
      _id: "6334bc5f649ce0637a5de76f",
      name: "Bishop Combs",
      phone: "+1 (836) 468-2716",
    },
    {
      _id: "6334bc5ff87fc61fdfd45bb6",
      name: "Frazier Simpson",
      phone: "+1 (856) 527-2061",
    },
    {
      _id: "6334bc5f687dd35a68172abe",
      name: "Faye Gordon",
      phone: "+1 (968) 522-2335",
    },
    {
      _id: "6334bc5f0ac9d27d65f5bbbf",
      name: "Peggy Strong",
      phone: "+1 (863) 544-2867",
    },
  ];
  return (
    <div>
      {datas.map((data) => (
        <DisplayData data={data}></DisplayData>
      ))}
    </div>
  );
};

export default LoadData;
