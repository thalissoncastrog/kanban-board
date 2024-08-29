import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  .header {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form button {
    margin: 1rem;
    width: 32.5rem;
    height: 3rem;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-400"]};
    border: 0 solid transparent;
    color: ${(props) => props.theme["blue-900"]};
    font-weight: bold;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .header {
      font-size: 1rem;
      padding: 1rem;
    }

    form button {
      width: 100%;
      height: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    form button {
      margin: 0.5rem;
      width: 100%;
      height: 2.5rem;
    }
  }
`;

export const FooterFormContainer = styled.div`
  display: flex;

  p {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkContainer = styled(Link)`
  color: ${(props) => props.theme["blue-400"]};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-items: flex-start;

  label {
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 8px;
    border: 0 solid transparent;
    width: 32.5rem;
    height: 3.063rem;
  }

  span {
    color: ${(props) => props.theme["red-400"]};
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    input {
      width: 100%;
      height: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    input {
      width: 100%;
      height: 2.5rem;
    }
  }
`;
