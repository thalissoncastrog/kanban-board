// import { SimpleKanban } from "simple_kanban";
// import { StepBoard } from "../../components/StepBoard";
import { HomeContainer } from "./styles";
import KanbanBoard, { Card, Column } from "react-custom-kanban-board";

// const renderAddCard = (
//   column: string,
//   setCards: React.Dispatch<React.SetStateAction<Card[]>>
// ) => (
//   <div style={{ margin: "1rem 0" }}>
//     <button
//       onClick={() =>
//         setCards((prev) => [
//           ...prev,
//           {
//             id: Math.random().toString(),
//             title: "New Task",
//             status: column,
//           },
//         ])
//       }
//       style={{
//         backgroundColor: "#007bff",
//         color: "white",
//         border: "none",
//         borderRadius: "4px",
//         // padding: "0.625rem 6rem",

//         width: "100%",
//         height: "2.5rem",
//         cursor: "pointer",
//         transition: "background-color 0.2s",
//       }}
//       onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
//       onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
//     >
//       + Add a new task
//     </button>
//   </div>
// );

// const renderCard = (
//   card: Card,
//   handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: Card) => void
// ) => (
//   <div
//     draggable
//     onDragStart={(e) => handleDragStart(e, card)}
//     style={{
//       backgroundColor: "#f9f9f9",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       padding: "16px",
//       margin: "4px 0",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.2s",
//     }}
//     onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
//     onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//   >
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       <h3
//         style={{
//           fontSize: "1.2rem",
//           color: "#333",
//           margin: 0,
//         }}
//       >
//         {card.title}
//       </h3>
//       {card.avatarPath && (
//         <img
//           src={card.avatarPath}
//           alt={`image ${card.avatarPath}`}
//           style={{
//             width: "32px",
//             height: "32px",
//             borderRadius: "50%",
//             border: "1px solid ${props => props.theme['gray-300']}",
//           }}
//         />
//       )}
//     </div>
//   </div>
// );

const columns: Column[] = [
  { title: "To Do", key: "todo", color: "#BDBDCD" },
  { title: "Doing", key: "doing", color: "#FDDDE3" },
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
      {/* <StepBoard />
      <StepBoard title="Doing" />
      <StepBoard title="Done" /> */}

      <KanbanBoard
        // renderAddCard={renderAddCard}
        columns={columns}
        initialCards={initialCards}
        columnForAddCard="todo"
      />
    </HomeContainer>
  );
}
