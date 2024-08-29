import styled from "styled-components";

export const StepBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 1.5rem auto;
  padding: 1rem;

  height: calc(100vh - 8.25rem);

  border-radius: 8px;

  background: ${(props) => props.theme["blue-900"]};

  span {
    font-size: 0.75rem;
    font-weight: bold;

    color: ${(props) => props.theme["gray-500"]};
  }
`;
