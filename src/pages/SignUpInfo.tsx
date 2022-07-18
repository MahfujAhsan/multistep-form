import { error } from "console";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface UserInfoOne {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserInfoOne>();
  const onSubmit: SubmitHandler<UserInfoOne> = (data) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your email?</span>
        </label>
        <input
          type="email"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("email", {
            required: true,
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "enter a valid email",
            },
          })}
        />
        <label className="label">
          {errors.email?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.email?.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
              message:
                "at least one digit, one lower case, one uppercase, 8 character.",
            },
          })}
        />
        <label className="label">
          {errors.password?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.password?.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Confirm password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("confirmPassword", {
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
              message: "passowrd didn't match",
            },
          })}
        />
        <label className="label">
          {errors.confirmPassword?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.confirmPassword?.message}
            </span>
          )}
        </label>
      </div>
      <input className="btn btn-sm text-white" type="submit" />
    </form>
  );
};

export default SignUpInfo;
