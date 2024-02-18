import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import List from "./components/List";
import Welcome from "./components/Welcome";

function App() {
  const items = [];

  const [exercise, setExercise] = useState(items);

  const handleNew = (exdate, extime) => {
    console.log(`the date is ${exdate} and time is ${extime}`);
    const newItems = [...exercise, { name: exdate, dueDate: extime }];

    setExercise(newItems);
  };

  const handleDeleteButton = (todoName) => {
    const newItems = exercise.filter((items) => items.name !== todoName);
    setExercise(newItems);
    console.log(`the delted item is ${todoName}`);
  };

  return (
    <>
      <Input newEx={handleNew}></Input>
      {items.length == 0 && <Welcome></Welcome>}
      <List items={exercise} onDeleteClick={handleDeleteButton}></List>
    </>
  );
}

export default App;
