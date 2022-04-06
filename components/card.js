import React from "react";
import { useForm } from "react-hook-form";
import CardImage from "./cardImage";
import Form from "./form";

export default function Card() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="shadow-md  bg-slate-100 dark:text-coolGray-100">
      <div className="flex justify-between ">
        <h2>CHOOSE YOUR CAR MODEL</h2>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="flex flex-col justify-between max-w-lg p-4 shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
          <h2 className="text-sm font-bold leading-tight lg:text-xl">
            UPLOAD CAR PHOTO*
          </h2>
          <div className="space-y-2">
            <CardImage />
          </div>
        </div>
        <Form register={register} />
      </div>
    </div>
  );
}
