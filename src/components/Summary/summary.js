import React from "react";
import s from "./summary.module.css";

const Summary = () => {
    return (
        <table className={s.table}>
            <div className={s.tr}>

  <tr className={s.name}>Сводка</tr>
  
            </div>
            <div className={s.tr}>
 <tr >
  <td className={s.month}>Ноябрь</td>
  <td className={s.summa}>10 000.00</td>
                </tr></div>
            <div className={s.tr}>
<tr >
  <td className={s.month}>Октябрь</td>
<td className={s.summa}>30 000.00</td>
</tr>
            </div>
            <div className={s.tr}>
<tr >
  <td className={s.month}>Сентябрь</td>
<td className={s.summa}>30 000.00</td>
</tr>
            </div>
            <div className={s.tr}>
<tr >
  <td className={s.month}>Август</td>
<td className={s.summa}>30 000.00</td>
</tr>
            </div>
           
</table>
    )
}

export default Summary;