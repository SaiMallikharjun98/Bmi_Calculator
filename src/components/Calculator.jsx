import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Calculator = () => {
  const [bmiValue, setBmiValue] = useState();
  let { register, handleSubmit, reset } = useForm();
  const handleValue = (data) => {
    const height = parseFloat(data.height) / 100;
    const weight = parseFloat(data.weight);
    const bmiValue = weight / height ** 2;
    setBmiValue(bmiValue.toFixed(2));
    reset();
  };
  return (
    <>
      <div className="text-center ">
        <img
          src="/Images/premium_photo-1681400641919-d5d03f6c0720.avif"
          alt="background-image"
          className="h-[100vh] w-[100vw] absolute"
        />
        <h1 className="text-bold text-3xl text-gray-600 pt-10 relative">
          BMI Calculator
        </h1>

        <form action="" onSubmit={handleSubmit(handleValue)}>
          <div className="flex gap-5 justify-center mt-40 relative">
            <input
              type="text"
              {...register("height")}
              placeholder="Enter Your Height"
              className=" outline-none  text-[10px]  w-[250px] rounded-[2px] p-3 text-white bg-gray-600 "
            />
            <input
              type="text"
              {...register("weight")}
              placeholder="Enter Your Weight"
              className=" outline-none text-[10px]  w-[250px] rounded-[2px]  p-3 text-white bg-gray-600"
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-500 text-white p-1 rounded hover:bg-blue-600  mt-8 w-[350px] text-[10px] relative"
          >
            Check Your BMI
          </button>
        </form>

        <div className="text-bold text-4xl text-gray-600 relative mt-5">
          {bmiValue}
        </div>
      </div>
    </>
  );
};

export default Calculator;
