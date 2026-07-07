// @ts-nocheck
import React from "react";

import { translate } from "@docusaurus/Translate";
import { ErrorMessage } from "@hookform/error-message";
import { OPENAPI_FORM } from "@theme/translationIds";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

export interface Props {
  value?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  paramName?: string;
  isRequired?: boolean;
}

function FormTextInput({
  isRequired,
  value,
  placeholder,
  password,
  onChange,
  paramName,
}: Props) {
  placeholder = placeholder?.split("\n")[0];

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const showErrorMessage = errors?.[paramName]?.message;

  const registration = paramName
    ? register(paramName, {
        required: isRequired
          ? translate({
              id: OPENAPI_FORM.FIELD_REQUIRED,
              message: "This field is required",
            })
          : false,
      })
    : undefined;

  const { onChange: registerOnChange, ...registerProps } = registration ?? {};

  return (
    <>
      {paramName ? (
        <input
          {...registerProps}
          className={clsx("openapi-explorer__form-item-input", {
            error: showErrorMessage,
          })}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          title={placeholder}
          {...(value !== undefined ? { value } : {})}
          onChange={(e) => {
            registerOnChange?.(e);
            onChange?.(e);
          }}
          autoComplete="off"
        />
      ) : (
        <input
          className="openapi-explorer__form-item-input"
          type={password ? "password" : "text"}
          placeholder={placeholder}
          title={placeholder}
          {...(value !== undefined ? { value } : {})}
          onChange={onChange}
          autoComplete="off"
        />
      )}
      {showErrorMessage && (
        <ErrorMessage
          errors={errors}
          name={paramName}
          render={({ message }) => (
            <div className="openapi-explorer__input-error">{message}</div>
          )}
        />
      )}
    </>
  );
}

export default FormTextInput;
