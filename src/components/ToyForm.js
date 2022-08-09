import React, {useState} from "react";



function ToyForm({handleAddNewToy}) {
  // const [toyName, setToyName] = useState("")
  // const [image, setImage]= useState("")

  const initialState = {
    name: "",
    image: ""
  }
  const [formData, setFormData]= useState(initialState)

  function handleChange(e){
   
    setFormData({
      ...formData,
      [e.target.name]: `${[e.target.value]}`
    })

  }

  function handleSubmit(e){
    const newToy = {
      ...formData,
      likes: 0
    }
    e.preventDefault()
       fetch ("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newToy)
      }).then(res=> res.json())
      .then(toy=> handleAddNewToy(toy))
      setFormData(initialState)
      }

  

  return (
    <div className="container"> 
      <form onSubmit = {handleSubmit}className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {formData.name}
        />
        <br />
        <input
          onChange ={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
