import { styled } from "styled-components";

interface ButtonProps {
  text: string;
  type: string;
}

const Button = (props: ButtonProps) => {
  return <ButtonBlock>{props.text}</ButtonBlock>;
};

export default Button;

const ButtonBlock = styled.button`
  ${({ theme }) => theme.Typography.title1};

  display: flex;
  min-width: 320px;
  max-width: 500px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: linear-gradient(
    93deg,
    rgba(189, 255, 0, 0.96) 40.56%,
    ${({ theme }) => theme.Color.GREEN} 59.16%
  );
  border-radius: 12px;
  color: #ffffff;
  border: none;

  &:hover {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
  }
`;
