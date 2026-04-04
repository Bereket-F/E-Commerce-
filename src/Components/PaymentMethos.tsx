"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentInfoSchema, PaymentInfoType } from "../types";
import { ShoppingCart } from "lucide-react";
import { set } from "zod";
import Image from "next/image";

const PaymentMethods = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentInfoType>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const handlePaymentSubmit: SubmitHandler<PaymentInfoType> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on card
        </label>
        <input
          type="text"
          id="cardHolder"
          {...register("cardHolder")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="First Last"
        />
        {errors.cardHolder && (
          <p className="text-red-500 text-xs">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          card number
        </label>
        <input
          type="text"
          id="cardNumber"
          {...register("cardNumber")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="1234 5678 9012 3456"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-xs">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expiryDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiry date (MM/YY)
        </label>
        <input
          type="text"
          id="expiryDate"
          {...register("expireDate")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="MM/YY"
        />
        {errors.expireDate && (
          <p className="text-red-500 text-xs">{errors.expireDate.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          {...register("cvv")}
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="123"
        />
        {errors.cvv && (
          <p className="text-red-500 text-xs">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Image
          src="/klarna.png"
          alt="Klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="PayPal"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="Stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>
      <button
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex 
              items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
        type="submit"
      >
        Check out
        <ShoppingCart className="w-4 h-4" />
      </button>
    </form>
  );
};

export default PaymentMethods;
