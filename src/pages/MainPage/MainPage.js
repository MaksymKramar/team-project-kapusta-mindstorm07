import Header from "../../components/Header/Header";
import AddExpense from "../../components/AddExpense/AddExpense";
import Balance from "../../components/Balance/Balance";
import ExpIncomeBtns from "../../components/ExpIncomeBtns/ExpIncomeBtns";
import TableHistory from "../../components/TableHistory/TableHistory";
import Summary from "../../components/Summary/summary";
import s from "./MainPage.module.css";
import DateCalendar from "../../components/Date/Date";
import BackgrounUser from "../../components/BackgroundUser/BackgroundUser";


export default function MainPage({ setActive }) {
  return (
    <>
      <div className={s.mainPage}>
        <Header setActive={setActive} />
        <div className={s.container}>
          <section className={s.section}>
           
            <Balance />
            <div className={s.btn1}>
              <ExpIncomeBtns />
            </div>
            <div className={s.tableWraper}>
              <div className={s.balanceString}>
                <DateCalendar />
                <AddExpense />
              </div>

              <div className={s.allTables}>
                <TableHistory />
                <Summary />
              </div>
              <div className={s.btn2}><ExpIncomeBtns /></div>  
            </div>
          </section>
        </div>
        <BackgrounUser />
      </div>
    </>
  );
}
