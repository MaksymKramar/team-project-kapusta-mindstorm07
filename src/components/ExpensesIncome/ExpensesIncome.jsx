import SumCategoryInfo from "../SumCategoryInfo/SumCategoryInfo";
import s from "./ExpensesIncome.module.scss";
import { getLoading } from "../../redux/transactions/transactionsSelectors";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

export default function ExpensesIncome({
  totalExpences,
  totalIncomes,
  month,
  year,
}) {
  const isLoading = useSelector(getLoading);

  return (
    <div className={s.container}>
      <section className={s.section}>
        <div className={s.amount}>
          <div className={s.amountExpenses}>
            <h3 className={s.amountTitle}>Расходы:</h3>
            <span className={s.amountExpensesSum}>
              {isLoading ? (
                <div className={s.spinner}>
                  <Spinner
                    width="40px"
                    height="10px"
                    color="#E53935"
                    type="ThreeDots"
                  />
                </div>
              ) : (
                <> {`- ${totalExpences} грн.`} </>
              )}
            </span>
          </div>

          <div className={s.amountIncome}>
            <h3 className={s.amountTitle}>Доходы:</h3>
            <span className={s.amountIncomeSum}>
              {isLoading ? (
                <div className={s.spinner}>
                  <Spinner
                    width="40px"
                    height="10px"
                    color="#407946"
                    type="ThreeDots"
                  />
                </div>
              ) : (
                <> {`+ ${totalIncomes} грн.`} </>
              )}
            </span>
          </div>
        </div>

        <SumCategoryInfo month={month} year={year} />
      </section>
    </div>
  );
}
