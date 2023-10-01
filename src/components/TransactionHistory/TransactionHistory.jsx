import style from './TransactionHistory.module.css';

const TransationItems = ({ type, amount, currency }) => {
  return (
    <tr className={style.tr}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
};

const TransationList = ({ transation }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.tableTh}>
        <tr className={style.tableThTr}>
          <th className={style.tableThTrTh}>Type</th>
          <th className={style.tableThTrTh}>Amount</th>
          <th className={style.tableThTrTh}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {transation.map(el => {
          return (
            <TransationItems
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransationList;
