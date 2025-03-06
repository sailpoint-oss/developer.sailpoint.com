import React, { useState, FocusEvent, ChangeEvent } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define prop types
interface ImplementationDropdownProps {
  implementation: string;
  onImplementationChange: (value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const ImplementationDropdown: React.FC<ImplementationDropdownProps> = ({
  implementation,
  onImplementationChange,
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
    onImplementationChange(event.target.value as string);
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
          id="implementation-dropdown-label"
          sx={{
            '&.Mui-focused': {
              color: isFocused ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
            },
          }}
        >
          Implementation
        </InputLabel>

        <Select
          value={implementation}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          label="Implementation"
          labelId="implementation-dropdown-label"
          id="implementation-dropdown-select"
          onOpen={handleDropdownOpen}
          onClose={handleDropdownClose}
          aria-expanded={expanded}
          sx={{
            '& .MuiSelect-select': {
              color: isFocused || expanded ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial',
            },
          }}
        >
          <MenuItem value="Workflows">Workflow</MenuItem>
          <MenuItem value="EventTrigger">Event Trigger</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default ImplementationDropdown;
