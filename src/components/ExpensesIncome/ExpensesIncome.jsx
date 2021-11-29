import SumCategoryInfo from "../SumCategoryInfo/SumCategoryInfo";
import s from "./ExpensesIncome.module.scss";

export default function ExpensesIncome({
  totalExpences,
  totalIncomes,
  month,
  year,
}) {
  return (
    <div className={s.container}>
      <section className={s.section}>
        <div className={s.amount}>
          <div className={s.amountExpenses}>
            <h3 className={s.amountTitle}>Расходы:</h3>
            <span
              className={s.amountExpensesSum}
            >{`- ${totalExpences} грн.`}</span>
          </div>

          <div className={s.amountIncome}>
            <h3 className={s.amountTitle}>Доходы:</h3>
            <span
              className={s.amountIncomeSum}
            >{`+ ${totalIncomes} грн.`}</span>
          </div>
        </div>

        <SumCategoryInfo month={month} year={year} />
      </section>
    </div>
  );
}
