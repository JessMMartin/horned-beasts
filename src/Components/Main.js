import React from "react";

export default function Main(props) {
  console.log(props);
  return (
    <div className="beasts">
      <h2>{props.title}</h2>
      <p>{props.para}</p>
      <img src={props.imgUrl} />
    </div>
  );
}
