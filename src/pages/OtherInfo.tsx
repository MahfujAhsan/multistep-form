import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface UserInfoOne {
  nationality: string;
  other: string;
}

const OtherInfo = () => {
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
          <span className="label-text">What is your Nationality?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("nationality", {
            required: "nationality required",
          })}
        />
        <label className="label">
          {errors.nationality?.type === "required" && (
            <span className="text-rose-500 text-xs">
              {errors.nationality.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Other Info</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          {...register("other", {
            required: "other info (ex. about your-self)",
          })}
        />
        <label className="label">
          {errors.other?.type === "required" && (
            <span className="text-rose-500 text-xs">
              {errors.other?.message}
            </span>
          )}
        </label>
      </div>
      <input className="btn btn-sm text-white" type="submit" />
    </form>
  );
};

export default OtherInfo;
