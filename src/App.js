import React, { useState } from "react";
import Homepages from "./Homepages";
import Gamepages from "./Gamepages";

function App() {
  const [game, setGame] = useState(false);

  const toggle = () => {
    setGame((prev) => !prev);
  };

  return (
    <>
      {game ? <Gamepages /> : <Homepages changer={toggle} />}
    </>
  );
}

export default App;
