import axios from "axios";
import React, { useState, useContext } from "react";
import { SmurfContext } from "./SmurfProvider";

function AddSmurfs(props) {
  const { change, setChange } = useContext(SmurfContext);

  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const UpdateSmurf = e => {
    setSmurf({ ...smurf, [e.target.id]: e.target.value });
  };

  const AddSmurf = e => {
    e.preventDefault();

    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("Submit Response", res);
        setChange(!change);
      })
      .catch(err => {
        console.log("Submit Error", err);
      });
    setSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <h1>Smurffy Village. Cool Smurfs Here!🍄🍄🍄</h1>
      <form onSubmit={AddSmurf}>
        <input
          required
          id='name'
          onChange={UpdateSmurf}
          type='text'
          name='name'
          placeholder='Add-Name'
          value={smurf.name.toString()}
        />
        <input
          required
          id='height'
          onChange={UpdateSmurf}
          type='number'
          name='height'
          placeholder='Add-Height:(cm)'
          value={smurf.height.toString()}
        />
        <input
          required
          id='age'
          onChange={UpdateSmurf}
          type='number'
          name='age'
          placeholder='Add-Age'
          value={smurf.age.toString()}
        />
        <br />
        <button type='submit'>Add Smurffy</button>
      </form>
    </div>
  );
}

export default AddSmurfs;
