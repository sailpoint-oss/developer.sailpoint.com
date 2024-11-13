import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TerminalFontSizeDropdown = ({ fontSize, onFontSizeChange }) => {
  const handleChange = (event) => {
    onFontSizeChange(event.target.value); // Notify parent of font size change
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
      <InputLabel id="terminal-font-size-label">Terminal Font Size</InputLabel>
      <Select
        labelId="terminal-font-size-label"
        id="terminal-font-size-select"
        value={fontSize}
        label="Terminal Font Size"
        onChange={handleChange}
      >
        <MenuItem value={'12'}>Small</MenuItem>
        <MenuItem value={'16'}>Medium</MenuItem>
        <MenuItem value={'18'}>Large</MenuItem>
        <MenuItem value={'24'}>Extra Large</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TerminalFontSizeDropdown;
