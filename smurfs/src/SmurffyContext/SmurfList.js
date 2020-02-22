import React, { useContext } from "react";
import Smurffy from "./Smurffy";
import { SmurfContext } from "./SmurfProvider";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div>
      {smurfs.map(smurf => (
        <Smurffy key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};
export default SmurfList;
