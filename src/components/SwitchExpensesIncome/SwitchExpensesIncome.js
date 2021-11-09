import React from "react";
import Expenses from "../Expenses/Expenses";
import Income from "../Income/Income";
// import s from "./SwitchExpensesIncome.module.scss";

export default function SwitchExpensesIncome() {
  return (
    <div>
      <Expenses />
      <Income />
    </div>
  );
}
