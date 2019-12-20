import React, { useState } from "react";
import ToDoListHeader from "../templates/ToDoListHeader";
import ToDoListContent from "../templates/ToDoListContent";
import styles from "./pages.scss";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([
    { title: "買い物に行く", description: "じゃがいも 人参 牛肉 ルウ 玉ねぎ" },
    { title: "勉強する", description: "GO Python 数学" },
  ]);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const addToDoList = (addItem) => {
    const errors = [];
    if (addItem.title === "") {
      errors.push("タイトル");
    }
    if (addItem.description === "") {
      errors.push("内容");
    }
    if (errors.length) {
      alert(`${errors.join(", ")}を入力してください。`); // eslint-disable-line
    } else {
      setTitleValue("");
      setDescriptionValue("");
      setToDoList([...toDoList, addItem]);
    }
  };

  return (
    <div className={styles.ToDoList}>
      <ToDoListHeader
        className={styles.ToDoList__Header}
        addToDoList={addToDoList}
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        descriptionValue={descriptionValue}
        setDescriptionValue={setDescriptionValue}
      />
      <ToDoListContent
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
};

export default ToDoList;
