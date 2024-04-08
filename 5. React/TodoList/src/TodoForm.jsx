import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import Create from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleChange = (e) => { setTask(e.target.value) };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="New Task Name" variant="outlined" onChange={handleChange} value={task} InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton edge="end" aria-label="create todo" type="submit">
                            <Create />
                        </IconButton>
                    </InputAdornment>
                }} />
            </form>
        </ListItem>
    )
}