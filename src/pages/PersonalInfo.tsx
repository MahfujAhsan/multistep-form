import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface UserInfoOne {
  firstName: string;
  lastName: string;
  userName: string;
}

const PersonalInfo = () => {
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
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("firstName", {
            required: "first name required"
          })}
        />
        <label className="label">
          {errors.firstName?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.firstName?.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Your password</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("lastName", {
            required: "last name is required"
          })}
        />
        <label className="label">
          {errors.lastName?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.lastName?.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">User name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("userName", {
            required: "user name is required"
          })}
        />
        <label className="label">
          {errors.userName?.type === "pattern" && (
            <span className="text-rose-500 text-xs">
              {errors.userName?.message}
            </span>
          )}
        </label>
      </div>
    </form>
  );
};

export default PersonalInfo;
