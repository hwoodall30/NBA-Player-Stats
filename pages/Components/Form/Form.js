import styles from "./Form.module.css";

export default function Form({ input, getinput, submit }) {
  return (
    <div className={styles.Form}>
      <form>
        <input value={input} onChange={getinput} placeholder="Search for Individual Player..."></input>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
