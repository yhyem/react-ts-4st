import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export const LogIn = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 512, margin: 12 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <input type="email" placeholder="Email" {...register("email", { required: true })} />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};
