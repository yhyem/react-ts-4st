import { styled } from "styled-components";
import { Link } from "react-router-dom";

interface TabProps {
  text: string;
  $active?: boolean;
  link: string;
}

const Tab = (props: TabProps) => {
  return (
    <TabWrapper>
      <TabBar to={props.link}>{props.text}</TabBar>
    </TabWrapper>
  );
};

export default Tab;

const TabWrapper = styled.div`
  display: flex;
  padding-top: 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const TabBar = styled(Link)`
  ${({ theme }) => theme.Typography.title1};
  color: ${({ theme }) => theme.Color.GRAY1};
  text-decoration: none;
  padding-bottom: 18px;
  border-bottom: 4px solid #ffffff;

  &:hover {
    color: ${({ theme }) => theme.Color.GREEN};
    border-bottom: 4px solid ${({ theme }) => theme.Color.GREEN};
  }
`;
