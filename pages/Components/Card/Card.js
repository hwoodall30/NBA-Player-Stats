import styles from "./Card.module.css";

export default function Card({ firstname, lastname, team, position, player, ids, setIds }) {
  const getidofplayer = (e) => {
    setIds(player.id);
  };

  return (
    <button onClick={getidofplayer} className={styles.Card}>
      <div className={styles.PlayerContainer}>
        <p>
          {firstname} {lastname}
        </p>
        <p>{team}</p>
        <p className={styles.Position}>{position}</p>
      </div>
    </button>
  );
}
