import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';
import { useState } from 'react';

const TerminalFontSizeDropdown = ({ fontSize, onFontSizeChange, onFocus, onBlur }) => {
  const { colorMode } = useColorMode();
  const [isFocused, setIsFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Custom theme to modify border color, label color, etc.
  const theme = createTheme({
    components: {
      // Customizing Select component's outlined input border color
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? '#ffffff' : 'initial', 
              borderWidth: 1, 
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)'),
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
          },
        },
      },
    },
  });

  const handleChange = (event) => {
    onFontSizeChange(event.target.value); // Notify parent of font size change
  };

  // Handle focus and blur state changes
  const handleFocus = (event) => {
    setIsFocused(true); // Set focus state to true
    if (onFocus) onFocus(event); // Call parent's onFocus handler
  };

  const handleBlur = (event) => {
    setIsFocused(false); // Set focus state to false
    if (onBlur) onBlur(event); // Call parent's onBlur handler
  };

  // Handle dropdown expanded state
  const handleDropdownOpen = () => {
    setExpanded(true); // Set expanded to true when dropdown is opened
  };

  const handleDropdownClose = () => {
    setExpanded(false); // Set expanded to false when dropdown is closed
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="terminal-font-size-label" sx={{
          '&.Mui-focused': {
            color: isFocused ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial', // Ensure the label text changes color on focus
          }
        }}>Terminal Font Size</InputLabel>
        <Select
          labelId="terminal-font-size-label"
          id="terminal-font-size-select"
          value={fontSize}
          label="Terminal Font Size"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onOpen={handleDropdownOpen}  // Handle opening dropdown
          onClose={handleDropdownClose} // Handle closing dropdown
          aria-expanded={expanded}
          sx={{
            '& .MuiSelect-select': {
              color: isFocused || expanded ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
            },
          }}
        >
          <MenuItem value={'12'}>Small</MenuItem>
          <MenuItem value={'16'}>Medium</MenuItem>
          <MenuItem value={'18'}>Large</MenuItem>
          <MenuItem value={'24'}>Extra Large</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default TerminalFontSizeDropdown;
