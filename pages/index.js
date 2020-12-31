import styles from "./index.module.css";
// import axios from "axios";
import React, { useState, useEffect } from "react";
import OverallContainer from "./Components/OverallContainer/OverallContainer";

export default function App({ players, stats }) {
  //States
  const [input, setInput] = useState("");
  const [text, setText] = useState("Curry");
  const [ids, setIds] = useState([]);

  //Get Current Year
  const currentyear = new Date().getFullYear();

  //Get Input
  const getinput = (e) => {
    setInput(e.target.value);
  };

  //Get Player IDs
  const getplayerid = () => {
    players.map((player_id) => setIds(`${player_id.id}`));
  };
  //UseEffect get player IDs
  useEffect(() => {
    const getplayerid = () => {
      players.map((player_id) => setIds(`${player_id.id}`));
    };
    getplayerid();
  }, [text, players]);

  //set the text
  const setthetext = () => {
    setText(input);
  };

  //Submit Button Function
  const submit = (e) => {
    setthetext();
    getplayerid();
    e.preventDefault();
    setInput("");
  };

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios({
  //       method: "get",
  //       url: `https://www.balldontlie.io/api/v1/players?search=${text}&per_page=6`
  //     });

  //     setPlayers(result.data.data);
  //   };
  //   fetchItems();
  // }, [text, currentyear]);

  // //Get Stats Data
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios({
  //       method: "get",
  //       url: `https://www.balldontlie.io/api/v1/season_averages?season=${currentyear}&player_ids[]=${ids}`
  //     });

  //     setStats(result.data.data);
  //   };
  //   fetchItems();
  // }, [ids, text, currentyear]);

  //JSX
  return (
    <div className={styles.IndexPage}>
      <OverallContainer
        input={input}
        getinput={getinput}
        submit={submit}
        text={text}
        stats={stats}
        players={players}
        getplayerid={getplayerid}
        currentyear={currentyear}
        ids={ids}
        setIds={setIds}
        // results={results}
      />
    </div>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://www.balldontlie.io/api/v1/players?search=Curry&per_page=6`);
  const playerdata = await res.json();

  const res1 = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=115`);
  const statsdata = await res1.json();

  // By returning { props: { playerdata } }, the Blog component
  // will receive `playerdata` as a prop at build time
  return {
    props: {
      players: playerdata.data,
      stats: statsdata.data
    }
  };
}
