import style from './Statistics.module.css';


const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
          <h2 className={style.title}>{ title }</h2>

      <ul className={style.statList}>
        {stats.map(dataItem => {
          return (
            <StatisticsListItem
              key={dataItem.id}
              label={dataItem.label}
              percentage={dataItem.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default StatisticsList;
