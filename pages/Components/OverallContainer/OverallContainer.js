import styles from "./OverallContainer.module.css";
import Form from "../Form/Form";
import CardGrid from "../CardGrid/CardGrid";
import IndividualStats from "../IndividualStats/IndividualStats";

export default function OverallContainer({
  input,
  getinput,
  submit,
  text,
  players,
  getplayerid,
  stats,
  currentyear,
  ids,
  setIds
}) {
  return (
    <div className={styles.OverallContainer}>
      <div className={styles.Container1}>
        <Form input={input} getinput={getinput} submit={submit} text={text} />
        <CardGrid players={players} getplayerid={getplayerid} ids={ids} setIds={setIds} />
      </div>
      <div className={styles.Container2}></div>
      <div className={styles.Container3}>
        <div className={styles.Container3container}>
          <h1>Individual Stats {currentyear}:</h1>
          <IndividualStats className={styles.statscontainer} stats={stats} />
        </div>
      </div>
    </div>
  );
}
