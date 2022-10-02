import { memo } from "react";
import { useForm } from "react-hook-form";

export default memo(() => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="flex justify-center pt-44">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>First name</h1>
          <input
            className="w-80 h-10 border border-gray-400 rounded-md px-2 mb-5"
            {...register("firstName", {
              required: "Обязательно к заполнению",
              minLength: {
                value: 1,
                message: "Минимум 1 символ",
              },
            })}
          />
        </div>

        <div>
          <h1>Last name</h1>
          <input
            className="w-80 h-10 border border-gray-400 rounded-md px-2 mb-5"
            {...register("lastName", {
              required: "Обязательно к заполнению",
              minLength: {
                value: 1,
                message: "Минимум 1 символ",
              },
            })}
          />
        </div>

        <div>
          <h1>Age</h1>
          <input
            type="number"
            className="w-80 h-10 border border-gray-400 rounded-md px-2 mb-5"
            {...register("age", {
              required: "Обязательно к заполнению",
            })}
          />
        </div>

        <input
          className="w-full cursor-pointer py-2 rounded-md text-white bg-red-700 disabled:bg-gray-300 disabled:cursor-default"
          type="submit"
        />
      </form>
    </div>
  );
});
