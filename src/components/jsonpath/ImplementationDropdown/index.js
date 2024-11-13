import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ImplementationDropdown = ({ implementation, onImplementationChange }) => {
  const handleChange = (event) => {
    onImplementationChange(event.target.value); // Notify parent of font size change
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 220 }}>
      <InputLabel id="implementation-dropdown-label">Implementation</InputLabel>
      <Select
        labelId="implementation-dropdown-label"
        id="implementation-dropdown-select"
        value={implementation}
        label="Implementation"
        onChange={handleChange}
      >
        <MenuItem value={'Workflows'}>Workflow</MenuItem>
        <MenuItem value={'EventTrigger'}>Event Trigger</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ImplementationDropdown;
