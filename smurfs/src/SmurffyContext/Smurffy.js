import React, { useState, useContext } from "react";
import axios from "axios";
import { SmurfContext } from "./SmurfProvider";

const Smurffy = props => {
  const { change, setChange } = useContext(SmurfContext);
  const [selected, setSelected] = useState(false);
  const [smurf, setSmurf] = useState({
    id: props.smurf.id,
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height,
  });

  const SelectSmurffy = e => {
    e.preventDefault();
    setSelected(!selected);
  };

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.id]: e.target.value });
  };

  const EditSmurffy = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${props.smurf.id}`, smurf)
      .then(res => {
        console.log("Edit Response", res);
        setChange(!change);
      })
      .catch(err => {
        console.log("Edit Error", err);
      });
    setSelected(!selected);
  };

  const DeleteSmurffy = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${props.smurf.id}`)
      .then(res => {
        console.log("Delete Response", res);
        setChange(!change);
      })
      .catch(err => {
        console.log("Delete Error", err);
      });
  };

  return (
    <div>
      {selected ? (
        <form>
          <label>
            Smurf Name:
            <input
              id='name'
              type='text'
              name='name'
              autoComplete='off'
              onChange={handleChange}
              value={smurf.name}
            />
          </label>
          <label>
            Smurf Age:
            <input
              id='age'
              type='number'
              name='age'
              autoComplete='off'
              onChange={handleChange}
              value={smurf.age.toString()}
            />
          </label>
          <label>
            Smurf Height:
            <input
              id='height'
              type='text'
              name='height'
              autoComplete='off'
              onChange={handleChange}
              value={smurf.height.toString()}
            />
          </label>
          <button type='submit' onClick={EditSmurffy}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h3>{props.smurf.name}</h3>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.height}cm</p>
        </div>
      )}
      <button onClick={SelectSmurffy}>
        {selected ? "Cancel Edit" : "Edit"}
      </button>
      <button onClick={DeleteSmurffy}>Delete</button>
    </div>
  );
};

export default Smurffy;
