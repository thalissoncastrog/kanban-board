import { HomeContainer } from "./styles";
import KanbanBoard, { Card, Column } from "react-custom-kanban-board";

const columns: Column[] = [
  {
    title: "To-Do",
    key: "todo",
    color: "#BF616A",
  },
  { title: "Doing", key: "doing", color: "#FDE68A" },
  { title: "Done", key: "done", color: "#71C781" },
];

const initialCards: Card[] = [
  {
    id: "1",
    title: "Task 1",
    status: "todo",
    avatarPath: "https://github.com/thalissoncastrog.png",
  },
];

export function Home() {
  return (
    <HomeContainer>
      <KanbanBoard
        columns={columns}
        initialCards={initialCards}
        columnForAddCard="todo"
      />
    </HomeContainer>
  );
}
