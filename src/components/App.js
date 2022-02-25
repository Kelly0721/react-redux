import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList a="bbb" b="ccc" />
      <Footer />
    </div>
  );
};

export default App;
