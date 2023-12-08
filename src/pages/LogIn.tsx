import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Input";
import { styled } from "styled-components";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../yup/LoginSchema";
import { LoginRequestPayload } from "../payload";
import useSWRMutation from "swr/mutation";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestPayload>({ resolver: yupResolver(LoginSchema), mode: "onChange" });

  const onSubmit: SubmitHandler<LoginRequestPayload> = data => {
    console.log(data);
  };

  async function sendRequest(url: string, { arg }: { arg: LoginRequestPayload }) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
    }).then(res => res.json());
  }

  const { trigger, isMutating } = useSWRMutation("/api/auth/login", sendRequest);

  return (
    <LoginWrapper>
      <FormBlock onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <LoginBlock>
          <Input
            title="이메일"
            type="email"
            $isError={errors.email ? true : false}
            $errorMessage={errors.email?.message}
            register={register("email")}
          />
          <Input
            title="비밀번호"
            type="password"
            $isError={errors.password ? true : false}
            $errorMessage={errors.password?.message}
            register={register("password")}
          />
        </LoginBlock>

        <Button type="submit" text="로그인" />
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
