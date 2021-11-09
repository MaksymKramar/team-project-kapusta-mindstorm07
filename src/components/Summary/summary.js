import React from "react";
import s from "./summary.module.css";

const Summary = () => {
    return (
        <table>
            <div className={s.tr}>
<tr >
  <th className={s.name}>Сводка</th>
  </tr>
            </div>
            <div className={s.tr}>
 <tr >
  <td className={s.td}>Ноябрь</td>
  <td className={s.td}>10 000.00</td>
                </tr></div>
            <div className={s.tr}>
<tr >
  <td className={s.td}>Декабрь</td>
<td className={s.td}>30 000.00</td>
</tr>
</div>
</table>
    )
}

export default Summary;