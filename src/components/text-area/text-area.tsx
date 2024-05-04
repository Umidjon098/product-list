/* eslint-disable react/display-name */
"use client";

import React, { forwardRef, TextareaHTMLAttributes, useId } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  icon?: React.ReactElement | null;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, icon, placeholder, required, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col ">
        <label htmlFor={id} className="relative inline-flex gap-3">
          <div className="absolute top-5 left-3">{icon}</div>
          <textarea
            className="form-textarea block bg-gray-faq w-full  focus:border-primary px-4 rounded-button border py-3 outline-none  placeholder:text-text text-sm resize-none"
            ref={ref}
            id={id}
            placeholder={`${placeholder || ""}${required ? "*" : ""}`}
            {...props}
          />
        </label>
        {!!error && (
          <p role="alert" className="text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
