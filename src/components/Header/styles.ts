import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem;

  border-top: 3px solid transparent;
  border-bottom: 3px solid ${(props) => props.theme["gray-900"]};
`;
