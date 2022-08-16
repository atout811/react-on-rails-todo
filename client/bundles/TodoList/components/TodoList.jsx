import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const TodoList = ({data}) => {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState(data);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (value) => async () => {
    const currentIndex = todos.filter((todo) => todo.text === value);

    const { status } = await axios.post(`/delete-todo`, {
      id: currentIndex[0].id,
    });
    let arr = todos.filter((todo) => todo.id !== currentIndex[0].id);
    setTodos(arr);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = async () => {
    const { data } = await axios.post(`/todo`, {
      text: text,
    });

    setTodos((prev) => [...prev, data]);
  };

  return (
    <>
    {console.log(data)}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <InputLabel htmlFor="todo">Todo</InputLabel>
        <OutlinedInput
          label="Todo"
          id="todo"
          value={text}
          onChange={handleChange}
        />
        <Button onClick={handleClick} variant="contained">
          Add Todo
        </Button>
      </Box>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((value) => {
          const labelId = `checkbox-list-label-${value.text}`;

          return (
            <ListItem key={value.text} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value.text)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.text) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.text}`} />
              </ListItemButton>

              <ListItemButton
                role={undefined}
                onClick={handleDelete(value.text)}
                dense
              >
                <IconButton edge="end" aria-label="comments">
                  {" "}
                  delete
                </IconButton>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
