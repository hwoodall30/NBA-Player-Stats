import styles from "./IndividualStats.module.css";

const IndividualStats = ({ stats }) => {
  if (stats.length === 0) {
    return <div>No Stats</div>;
  } else {
    return (
      <div className={styles.IndividualStats}>
        <p>PPG: {stats[0].pts}</p>
        <p>Assist: {stats[0].ast}</p>
        <p>Rebounds: {stats[0].reb}</p>
      </div>
    );
  }
};

export default IndividualStats;
