import { useContext, useState } from "react";
import { arrContext } from "./App";

function TodoList() {
  const { arrActivity, setArrActivity } = useContext(arrContext);

  var num = 0;

  function handleClick(id) {
    var tempa = arrActivity.filter((items) => {
      for (var i = 0; i = i + 1; i > arrActivity.length ) {
        if (items.id === id) {
          return false
        } else {
          return true
        }
      }
      console.log(i)

    });

    setArrActivity(tempa)

    console.log(tempa)

  }

  return (
    <>
      {arrActivity.map((items) => {
        num = num + 1;
        return (
          <div style={{ display: "block", padding: "10px" }}>
            <h1 style={{ display: "inline", paddingRight: "10px" }}>
              {items.activity}
            </h1>
            <button
              onClick={() => {
                handleClick(items.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
