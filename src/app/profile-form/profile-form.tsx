"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/input";
import React, { useState } from "react";
import { UpdateProfileFormValues } from "@/types/user";
import { PhoneInput } from "@/components/phone-input";
import { Modal } from "@/components/modal";
import { useMainContext } from "@/context/main";
import { TextArea } from "@/components/text-area";
import { Switch } from "@/components/switch";

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    description: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    university: yup.string(),
    courses: yup.number(),
  })
  .required();

const ProfileForm = () => {
  const { isOpen, handleClose } = useMainContext();
  const [isStudent, setIsStudent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
    reset,
  } = useForm<UpdateProfileFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: "male",
    },
  });
  const handleFinish = (data: UpdateProfileFormValues) => {
    console.log(data);
    reset();
    handleClose && handleClose();
  };

  const handleChange = (checked: boolean) => {
    setIsStudent(checked);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="large">
      <form id="profile" onSubmit={handleSubmit(handleFinish)}>
        <div className="w-full">
          <h1 className="font-semibold text-xl mb-5">{"Add user"}</h1>
          <div className="grid cs:grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              error={errors.firstname?.message}
              {...register("firstname")}
              label={"firstname"}
              fullWidth
              required
            />
            <Input
              {...register("lastname")}
              error={errors.lastname?.message}
              label={"lastname"}
              fullWidth
              required
            />
            <Input
              label={"email.address"}
              {...register("email")}
              error={errors.email?.message}
              fullWidth
              required
            />
            <PhoneInput
              value={watch("phone")}
              error={errors.phone?.message}
              country="us"
              onChange={(value) => setValue("phone", value)}
            />

            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="relative w-full max-h-[60px] border
            border-gray-inputBorder p-5 outline-none focus-ring rounded-button
            flex items-center justify-between"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            />
            <TextArea
              placeholder={"description".toString()}
              rows={2}
              {...register(`description`)}
              error={errors.description && errors.description.message}
              maxLength={250}
              required
            />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Are you student?</span>
              <Switch value={isStudent} onChange={handleChange} />
            </div>
            <div></div>
            {isStudent && (
              <>
                <Input
                  error={errors.university?.message}
                  {...register("university")}
                  label={"university"}
                  fullWidth
                />
                <Input
                  {...register("courses")}
                  error={errors.courses?.message}
                  label={"courses"}
                  type="number"
                  max={4}
                  fullWidth
                />
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-center px-4 py-3 mt-6 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ProfileForm;
