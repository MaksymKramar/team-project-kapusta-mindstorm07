import React from "react";
import s from "./summary.module.css";

const Summary = () => {
    return (
        <table className={s.table}>
            <div className={s.tr}>
<tr >
  <th className={s.name}>Сводка</th>
  </tr>
            </div>
            <div className={s.tr}>
 <tr >
  <td className={s.month}>Ноябрь</td>
  <td className={s.summa}>10 000.00</td>
                </tr></div>
            <div className={s.tr}>
<tr >
  <td className={s.month}>Декабрь</td>
<td className={s.summa}>30 000.00</td>
</tr>
</div>
</table>
    )
}

export default Summary;