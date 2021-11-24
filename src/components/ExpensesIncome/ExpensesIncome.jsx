import SumCategoryInfo from "../SumCategoryInfo/SumCategoryInfo";
import s from "./ExpensesIncome.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  getTransByMonthPlus,
  getTransByMonthMinus,
} from "../../redux/transactions";
import {
  getTransactionsTotalAmountFalse,
  getTransactionsTotalAmountTrue,
} from "../../redux/transactions";

export default function ExpensesIncome() {
  const totalIncomes = useSelector(getTransactionsTotalAmountTrue) || 0;
  const totalExpences = useSelector(getTransactionsTotalAmountFalse) || 0;
  const date = "11.2021";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransByMonthPlus(date));
    dispatch(getTransByMonthMinus(date));
  }, [dispatch]);

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

        <SumCategoryInfo />
      </section>
    </div>
  );
}

// import BackBtn from "../../components/BackBtn/BackBtn";
// // import Balance from "../../components/Balance/Balance";
// import CurrentPeriod from "../../components/CurrentPeriod/CurrentPeriod";
// import SumCategoryInfo from "../SumCategoryInfo/SumCategoryInfo";
// import s from "./ExpensesIncome.module.scss";

// export default function ExpensesIncome() {
//   const totalExpences = 0;
//   const totalIncomes = 0;

//   return (
//     <div className={s.container}>
//       <section className={s.section}>
//         <div className={s.reportNav}>
//           <BackBtn />
//           {/* <Balance /> */}
//           <CurrentPeriod />
//         </div>

//         <div className={s.amount}>
//           <div className={s.amountExpenses}>
//             <h3 className={s.amountTitle}>Расходы:</h3>
//             <span className={s.amountExpensesSum}>{`- ${totalExpences}.00 грн.`}</span>
//           </div>

//           <div className={s.amountIncome}>
//             <h3 className={s.amountTitle}>Доходы:</h3>
//             <span className={s.amountIncomeSum}>{`+ ${totalIncomes}.00 грн.`}</span>
//           </div>
//         </div>

//         <SumCategoryInfo />
//     </section>
//     </div>
//   );
// }
