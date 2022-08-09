import React from "react";

function ToyCard({toy, handleDeleteToy, handleToyLike}) {

  const {name, image, likes}= toy

  function onDelete(){
    handleDeleteToy(toy)
  }

  function onLike(){
    handleToyLike(toy)
  }


  return (
    <div className="card">
      <h2>{`${name}`}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick = {onLike} className="like-btn">Like {"<3"}</button>
      <button onClick= {onDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
