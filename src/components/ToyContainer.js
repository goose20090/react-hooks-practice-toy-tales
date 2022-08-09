import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy, handleToyLike}) {
  const toysToRender = toys.map((toy)=> <ToyCard key = {toy.id} handleDeleteToy= {handleDeleteToy} handleToyLike = {handleToyLike} toy = {toy}/>)
  return (
    <div id="toy-collection">{toysToRender}</div>
  );
}

export default ToyContainer;
