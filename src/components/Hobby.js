import React from "react";
const Hobby = (props, key) => {
  const { title, description } = props;
  return (
    <li className="hobby collection-item" key={key}>
      <b>{title}</b>
      <br />
      {description}
    </li>
  );
};

export default Hobby;
