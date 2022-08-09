import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [toys, setToys]= useState([]);

  useEffect(()=>{
       fetch ("http://localhost:3001/toys")
       .then(res=>res.json())
       .then(toys => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(toy){
    console.log(toy)

    setToys([...toys, toy])
     
  }

  function handleDeleteToy(toy){
    fetch (`http://localhost:3001/toys/${toy.id}`, {
        method: "DELETE",
      })
      .then(res=> console.log(res))

      setToys(toys.filter(iteratedToy=> iteratedToy.id !== toy.id))

  }

  function handleToyLike(toy){
      fetch (`http://localhost:3001/toys/${toy.id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            likes: (toy.likes + 1)
          })
        })
        .then(res=> res.json())
        .then(patchedToy=> setToys (toys.map((toy)=>{
          if(patchedToy.id === toy.id){
            return patchedToy
          }
          else {
            return toy
          }
        })))
  
    
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddNewToy = {handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleToyLike = {handleToyLike} handleDeleteToy = {handleDeleteToy}  toys= {toys}/>
    </>
  );
}

export default App;
