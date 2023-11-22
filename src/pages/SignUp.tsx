import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Input";
import { styled } from "styled-components";
import Button from "../components/Button";

type Inputs = {
  email: string;
  password: string;
  username: string;
};

export const SignUp = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <LoginWrapper>
      <FormBlock onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입</Title>
        <LoginBlock>
          <Input
            title="이름"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <Input
            title="이메일"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Input
            title="비밀번호"
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
          />
        </LoginBlock>

        <Button type="submit" text="가입하기" />
      </FormBlock>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginBlock = styled.div`
  display: flex;
  min-width: 320px;
  max-width: 500px;
  flex-direction: column;
  gap: 26px;
  align-self: stretch;
`;

const FormBlock = styled.form`
  display: flex;
  width: 500px;
  min-width: 320px;
  max-width: 500px;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;

const Title = styled.div`
  ${({ theme }) => theme.Typography.title1};
  color: ${({ theme }) => theme.Color.GRAY1};
  text-align: center;
`;
