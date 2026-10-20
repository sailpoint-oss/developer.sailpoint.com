import React, { useEffect } from "react";

import FormTextInput from "@theme/ApiExplorer/FormTextInput";
import { Param, setParam } from "@theme/ApiExplorer/ParamOptions/slice";
import { useTypedDispatch } from "@theme/ApiItem/hooks";
import { useFormContext } from "react-hook-form";

export interface ParamProps {
  param: Param;
}

export default function ParamTextFormItem({ param }: ParamProps) {
  const dispatch = useTypedDispatch();
  const { setValue } = useFormContext();

  // The upstream ApiItem pre-loads example values into Redux for all params.
  // For required params: sync the value to the form input so it's visible.
  // For optional params: clear the Redux value so the field starts empty —
  // otherwise hidden example values get sent silently when the user clicks Send
  // without realising the field was pre-populated.
  useEffect(() => {
    if (param.required) {
      if (param.value !== undefined && !Array.isArray(param.value)) {
        setValue(`${param.in}-${param.name}`, param.value);
      }
    } else {
      dispatch(setParam({ ...param, value: undefined }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormTextInput
      isRequired={param.required}
      paramName={`${param.in}-${param.name}`}
      placeholder={param.description || param.name}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(
          setParam({
            ...param,
            // Store raw values — encoding is handled once in makeRequest.ts via
            // URLSearchParams, so pre-encoding here would cause double-encoding.
            value: e.target.value,
          })
        )
      }
    />
  );
}
