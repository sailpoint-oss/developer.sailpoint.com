import React, { useState, ChangeEvent, FocusEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';

// Define props interface
interface TerminalFontSizeDropdownProps {
  fontSize: string;
  onFontSizeChange: (value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const TerminalFontSizeDropdown: React.FC<TerminalFontSizeDropdownProps> = ({
  fontSize,
  onFontSizeChange,
  onFocus,
  onBlur,
}) => {
  const { colorMode } = useColorMode();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? '#ffffff' : 'initial',
              borderWidth: 1,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: colorMode === 'dark' ? '#ffffff' : 'black',
          },
        },
      },
    },
  });

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    onFontSizeChange(event.target.value as string);
  };

  // Handle focus and blur state changes
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  };

  // Handle dropdown expanded state
  const handleDropdownOpen = () => setExpanded(true);
  const handleDropdownClose = () => setExpanded(false);

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1, minWidth: 220, maxWidth: 220 }}>
        <InputLabel
          id="terminal-font-size-label"
          sx={{
            '&.Mui-focused': {
              color: isFocused ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
            },
          }}
        >
          Terminal Font Size
        </InputLabel>
        <Select
          labelId="terminal-font-size-label"
          id="terminal-font-size-select"
          value={fontSize}
          label="Terminal Font Size"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onOpen={handleDropdownOpen}
          onClose={handleDropdownClose}
          aria-expanded={expanded}
          sx={{
            '& .MuiSelect-select': {
              color: isFocused || expanded ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
            },
          }}
        >
          <MenuItem value="12">Small</MenuItem>
          <MenuItem value="16">Medium</MenuItem>
          <MenuItem value="18">Large</MenuItem>
          <MenuItem value="24">Extra Large</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default TerminalFontSizeDropdown;
