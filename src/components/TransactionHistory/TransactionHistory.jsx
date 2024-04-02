import css from "../TransactionHistory/TransactionHistory.module.css"
export default function TransactionHistory ({items}){
    return(
        <table className={css.tableTr}>
  <thead className={css.tHead}>
    <tr>
      <th className={css.tName}>Type</th>
      <th className={css.tName}>Amount</th>
      <th className={css.tName}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tBody}>
    {items.map(({id, type, amount, currency}) =>(
        <tr key={id} className={css.column}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
    
  </tbody>
</table>

    )
}