import React, { useState } from "react";
function TodoItem(props) {

  const hoanthanhphongcach = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  const [kiemtra, setKiemtra] = useState(props.item.completed);

  const onCheck = () => {
    setKiemtra(!kiemtra);
  };

  console.log(props.item.completed);

  // console.log("id", props.item.completed);

  return (
    <div className="card">
      <input
        type="checkbox"
        // checked={props.item.completed}
        checked={kiemtra}
        // onChange={() => props.handleChange(props.item.id)}
        onChange={onCheck}
      />
      <p style={kiemtra ? hoanthanhphongcach: null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
