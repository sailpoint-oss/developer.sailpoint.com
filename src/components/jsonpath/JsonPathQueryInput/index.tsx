import React, { useState, FocusEvent, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define props interface
interface JsonPathQueryInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const JsonPathQueryInput: React.FC<JsonPathQueryInputProps> = ({ value, onChange, onFocus, onBlur }) => {
  const { colorMode } = useColorMode();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? '#ffffff' : 'initial',
              borderWidth: 1,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        onFocus={(event) => {
          setIsFocused(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          if (onBlur) onBlur(event);
        }}
        sx={{
          m: 1,
          minWidth: 800,
          '& .MuiInputLabel-root': {
            color: isFocused ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
          },
          '& .MuiOutlinedInput-root.Mui-focused': {
            '& fieldset': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
          },
        }}
        id="outlined-basic-jsonpath-input"
        label="Enter JSONPath query"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};

export default JsonPathQueryInput;
