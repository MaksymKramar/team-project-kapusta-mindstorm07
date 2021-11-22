import Header from "../../components/Header/Header";
import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";
import BackgrounUser from "../../components/BackgroundUser/BackgroundUser";
import Balance from "../../components/Balance/Balance";
import s from "./ReportPage.module.css";

export default function ReportPage({ setActive }) {
  return (
    <>
      <Header
        typePage="report"
        setActive={setActive}
        // month={month}
        // year={year}
        // handleChangeMonthLeft={handleChangeMonthLeft}
        // handleChangeMonthRight={handleChangeMonthRight}
      />
      <BackgrounUser />
      <div className={s.wrapper}>
        <Balance />
        <ExpensesIncome />
      </div>
    </>
  );
}
