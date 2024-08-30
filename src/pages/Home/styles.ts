import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  .add-card {
    background: ${(props) => props.theme["blue-400"]};
    border: 0;
    border-radius: 8px;
  }

  .submit-btn {
    background: ${(props) => props.theme["blue-400"]};
    border: 0;
    border-radius: 8px;
  }

  .column-title {
    color: ${(props) => props.theme["gray-900"]};
    opacity: 1;
  }

  @media (max-width: 768px) {
    .kanban-board {
      flex-direction: column;
      align-items: center;
    }

    .add-card {
      height: 2.5rem;
    }

    .add-card span {
      font-size: 1rem;
    }
  }
`;
