"use client";

import React from "react";
import { frequencias } from "@/app/lib/frequencias";

const Frequencias = () => {
  return (
    <ul>
      {frequencias?.map((item, index) => (
        <li key={index}>
          <p>
            <strong>{item.place}</strong>
            {item.freq}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Frequencias;
