"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingInfoSchema, ShippingInfoType } from "../types";
import { ArrowRight } from "lucide-react";
import { set } from "zod";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingData,
}: {
  setShippingData: (data: ShippingInfoType) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingInfoType>({
    resolver: zodResolver(ShippingInfoSchema),
  });

  const router = useRouter();

  const handleShippingSubmit: SubmitHandler<ShippingInfoType> = (data) => {
    setShippingData(data);
    router.push("/Cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="First Last"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="example@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          {...register("phone")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="+251999999999"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="123 Main St"
        />
        {errors.address && (
          <p className="text-red-500 text-xs">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          {...register("city")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="Addis Ababa"
        />
        {errors.city && (
          <p className="text-red-500 text-xs">{errors.city.message}</p>
        )}
      </div>
      <button
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex 
              items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
        type="submit"
      >
        Countinue
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ShippingForm;
