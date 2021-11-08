import React from "react";
import Expenses from "../Expenses/Expenses";
import Income from "../Income/Income";
import s from "./ControlledCarousel.module.scss";

export default function ControlledCarousel() {
  return (
    <div>
      <Expenses />
      <Income />
    </div>
  );
}
