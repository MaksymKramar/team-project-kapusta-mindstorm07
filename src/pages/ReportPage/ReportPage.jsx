import Header from "../../components/Header/Header";
import BackBtn from "../../components/BackBtn/BackBtn"
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
        <div className={s.secondWrapper}>
          <BackBtn />
          <Balance />
        </div>
        <ExpensesIncome />
      </div>
    </>
  );
}
