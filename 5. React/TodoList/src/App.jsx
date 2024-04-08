import CssBaseline from "@mui/material/CssBaseline";
import TodoList from "./TodosList";
import NavBar from "./NavBar";

export default function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  )
}