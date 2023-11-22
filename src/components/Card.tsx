import { styled } from "styled-components";

interface CardProps {
  title: string;
  content: string;
}

const Card = (props: CardProps) => {
  return (
    <CardWrapper>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  width: 1200px;
  min-width: 320px;
  max-width: 1200px;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px #e5e8f0;
`;

const Title = styled.div`
  ${({ theme }) => theme.Typography.body1}
  color: ${({ theme }) => theme.Color.GRAY2}
`;

const Content = styled.div`
  ${({ theme }) => theme.Typography.title1}
  color: ${({ theme }) => theme.Color.GRAY1}
`;
