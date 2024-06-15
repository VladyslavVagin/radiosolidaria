"use client";

import { Audio } from "react-loader-spinner";
import { variours } from "@/app/lib/variousRadio";
import css from "./RadioLoader.module.css";

const RadioLoader = () => {
  return (
    <div className={css.loaderContainer}>
      {variours.map((item) => (
        <div key={item.id}>
          <Audio
            height="40"
            width="30"
            radius="9"
            color={"var(--radio-red"}
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ))}
    </div>
  );
};

export default RadioLoader;
