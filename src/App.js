import { createContext, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const arrContext = createContext();

const App = () => {
  const [arrActivity, setArrActivity] = useState([
    {
      id:1,
      activity:"Hello"
    }
  ]);

  return (
    <div>
      <arrContext.Provider value={{arrActivity,setArrActivity}}>
        <AddTodo/>
        <TodoList/>
      </arrContext.Provider>
    </div>
  );
};

export default App;
export {arrContext}
