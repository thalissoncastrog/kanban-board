import { StepBoardContainer } from "./styles";

interface StepBoardProps {
  title?: "To-do" | "Doing" | "Done";
}

export function StepBoard({ title = "To-do" }: StepBoardProps) {
  return (
    <StepBoardContainer>
      <span>{title}</span>
    </StepBoardContainer>
  );
}
