import React from "react";
import PropTypes from "prop-types";
import ToDoListItem from "../organisms/ToDoListItem";
import Text from "../atoms/Text";
import Box from "../atoms/Box";
import styles from "./templates.scss";

const ToDoListContent = (props) => {
  const { toDoList, setToDoList } = props;

  return (
    <div className={styles.ToDoList__Content}>
      {
        toDoList.length
          ? (
            toDoList.map((toDo) => (
              <ToDoListItem
                title={toDo.title}
                description={toDo.description}
                close
                closeFunc={() => { setToDoList(toDoList.filter((item) => item !== toDo)); }}
              />
            ))
          )
          : (
            <Box>
              <Text>ToDoが設定されていません。</Text>
            </Box>
          )
      }
    </div>
  );
};

ToDoListContent.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.object)),
  setToDoList: PropTypes.func,
};

ToDoListContent.defaultProps = {
  toDoList: [{}],
  setToDoList: () => {},
};

export default ToDoListContent;
