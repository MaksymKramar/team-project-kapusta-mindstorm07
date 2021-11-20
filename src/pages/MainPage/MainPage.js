import  Header  from "../../components/Header/Header";
import AddExpense from "../../components/AddExpense/AddExpense";
import Balance from "../../components/Date/Date";
import ExpIncomeBtns from "../../components/ExpIncomeBtns/ExpIncomeBtns";
import TableHistory from "../../components/TableHistory/TableHistory";
import Summary from "../../components/Summary/summary";
import s from "./MainPage.module.css";
import sprite from "../../images/sprite.svg"
// import { ImageBackground } from "react-native";

export default function MainPage() {
  return (
    <>
          <div className={s.mainPage}>
              <Header />
          <div className={s.container}>
                  <section className={s.section}>
                      {/* <Balance/> */}
                      <ExpIncomeBtns />
                      <div className={s.tableWraper}>
          <div className={s.balanceString}>
              <Balance />
                      <AddExpense />
                  </div>
          
          <div className={s.allTables}>
          <TableHistory/>
              <Summary />
              </div>
               </div>
              </section>
              {/* <ImageBackground sourse={require('../../images/GroupCabbages.png') }/> */}
              
              </div>
          </div>
         
    </>
  );
}