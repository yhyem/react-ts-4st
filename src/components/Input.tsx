import { styled } from "styled-components";

interface InputType {
  title: string;
  type: "email" | "password" | "text";
  placeholder: string;
  $isError?: boolean;
}

const Input = (props: InputType) => {
  return (
    <InputBlockWrapper>
      <Title>{props.title}</Title>
      <InputBlock type={props.type} placeholder={props.placeholder} />
    </InputBlockWrapper>
  );
};

export default Input;

const InputBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  ${({ theme }) => theme.Typography.body1};
  color: ${({ theme }) => theme.Color.GRAY1};
`;

const InputBlock = styled.input`
  color: ${({ theme }) => theme.Color.GRAY1};
  ${({ theme }) => theme.Typography.body1};

  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.Color.GRAY3};

  &:hover {
    border: 1px solid ${({ theme }) => theme.Color.GRAY2};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.Color.GRAY1};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.Color.GRAY1};
  }
`;