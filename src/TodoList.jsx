import { useContext, useState } from "react";
import { arrContext } from "./App";

function TodoList() {
  const { arrActivity, setArrActivity } = useContext(arrContext);

  console.log(arrActivity);
  console.log(setArrActivity);

  return (
    <>
      {arrActivity.map((items) => {
        return <h1>{items.activity}</h1>;
      })}
    </>
  );
}

export default TodoList;
