import React from 'react';

import FormItem from '@theme/ApiExplorer/FormItem';
import FormSelect from '@theme/ApiExplorer/FormSelect';
import FormTextInput from '@theme/ApiExplorer/FormTextInput';
import {useTypedDispatch, useTypedSelector} from '@theme/ApiItem/hooks';

import {setServer, setServerVariable} from './slice';

function Server() {
  const value = useTypedSelector((state: any) => state.server.value);
  const options = useTypedSelector((state: any) => state.server.options);
  const dispatch = useTypedDispatch();

  if (options.length <= 0) {
    return null;
  }

  if (options.length < 1 && value?.variables === undefined) {
    return null;
  }

  if (!value) {
    const defaultOption = options[0];
    dispatch(setServer(JSON.stringify(defaultOption)));
  }

  // Default to first option when existing server state is mismatched
  if (value) {
    const urlExists = options.find((s: any) => s.url === value.url);
    if (!urlExists) {
      const defaultOption = options[0];
      dispatch(setServer(JSON.stringify(defaultOption)));
    }
  }

  return (
    <div className="openapi-explorer__server-container">
      <FormItem>
        <FormSelect
          options={options.map((s: any) => s.url)}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            dispatch(
              setServer(
                JSON.stringify(
                  options.filter((s: any) => s.url === e.target.value)[0],
                ),
              ),
            );
          }}
          value={value?.url}
        />
        <small className="openapi-explorer__server-description">
          {value?.description}
        </small>
      </FormItem>
      {value?.variables &&
        Object.keys(value.variables).map((key) => {
          if (value.variables?.[key].enum !== undefined) {
            return (
              <FormItem label={key}>
                <FormSelect
                  options={value.variables[key].enum}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch(
                      setServerVariable(
                        JSON.stringify({key, value: e.target.value}),
                      ),
                    );
                  }}
                  value={value?.variables[key].default}
                />
              </FormItem>
            );
          }
          return (
            <FormItem label={key}>
              <FormTextInput
                placeholder={value.variables?.[key].default}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(
                    setServerVariable(
                      JSON.stringify({key, value: e.target.value}),
                    ),
                  );
                }}
                value={value?.variables?.[key].default}
              />
            </FormItem>
          );
        })}
    </div>
  );
}

export default Server;
