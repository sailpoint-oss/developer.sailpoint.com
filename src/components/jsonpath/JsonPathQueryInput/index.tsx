import React, { useState, FocusEvent, ChangeEvent, useCallback } from 'react';
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

  // Memoize theme to prevent recreation on every render
  const theme = React.useMemo(() => createTheme({
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
  }), [colorMode]);

  // Handle focus with useCallback to prevent unnecessary re-renders
  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  }, [onFocus]);

  // Handle blur with useCallback to prevent unnecessary re-renders
  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  }, [onBlur]);

  return (
    <ThemeProvider theme={theme}>
      <TextField
        key="jsonpath-query-input" // Stable key to prevent remounting
        onFocus={handleFocus}
        onBlur={handleBlur}
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
        autoComplete="off"
        spellCheck={false}
      />
    </ThemeProvider>
  );
};

export default JsonPathQueryInput;
