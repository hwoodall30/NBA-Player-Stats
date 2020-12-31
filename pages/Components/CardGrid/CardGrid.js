import styles from "./CardGrid.module.css";
import Card from "../Card/Card";

export default function CardGrid({ players, getplayerid, ids, setIds }) {
  return (
    <div className={styles.CardGrid}>
      {players.map((player) => (
        <Card
          key={player.id}
          firstname={player.first_name}
          lastname={player.last_name}
          team={player.team.full_name}
          position={player.position}
          getplayerid={getplayerid}
          ids={ids}
          setIds={setIds}
          players={players}
          player={player}
        />
      ))}
    </div>
  );
}
