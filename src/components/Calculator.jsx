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
      <div className="w-[500px] h-screen outline-none shadow-2xl text-center my-28 mx-auto">
        <div className="font-bold text-4xl text-gray-600  mt-8">
          {bmiValue}
        </div>
        <h1 className="text-bold text-3xl text-gray-600 pt-10">
          BMI Calculator
        </h1>

        <form action="" onSubmit={handleSubmit(handleValue)}>
          <div className="flex gap-5 justify-center mt-5">
            <input
              type="text"
              {...register("height")}
              placeholder="Enter Your Height"
              className=" outline-none  text-[15px]  w-[250px] rounded-[2px] p-3 text-white bg-gray-400 "
            />
            <input
              type="text"
              {...register("weight")}
              placeholder="Enter Your Weight"
              className=" outline-none text-[15px]  w-[250px] rounded-[2px]  p-3 text-white bg-gray-400"
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-500 text-white p-1 rounded hover:bg-blue-600  mt-8 w-[350px] text-[10px] relative"
          >
            Check Your BMI
          </button>
        </form>
      </div>
    </>
  );
};

export default Calculator;
