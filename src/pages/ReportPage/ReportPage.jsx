import Header from "../../components/Header/Header";
import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";

export default function ReportPage() {
  return (
    <>
      <Header
        typePage="report"
        // month={month}
        // year={year}
        // handleChangeMonthLeft={handleChangeMonthLeft}
        // handleChangeMonthRight={handleChangeMonthRight}
      />
      <ExpensesIncome />
    </>
  );
}
