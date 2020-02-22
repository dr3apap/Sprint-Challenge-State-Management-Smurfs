import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
export const SmurfContext = createContext();

export const SmurfProvider = props => {
  const [smurfs, setSmurfs] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(res => {
        const smurfs = res.data;
        setSmurfs(smurfs);
      })
      .catch(err => {
        const error = err.message;
        if (axios.error) {
          setSmurfs(error);
          err.message = "Sorry no Smurf available ";
        } else {
          setSmurfs(smurfs);
        }
      });
  }, [change]);

  return (
    <div>
      <SmurfContext.Provider value={{ smurfs, change, setChange }}>
        {props.children}
      </SmurfContext.Provider>
    </div>
  );
};
