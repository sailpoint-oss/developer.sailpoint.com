import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useColorMode } from '@docusaurus/theme-common';

const JsonPathQueryInput = ({ value, onChange, onFocus, onBlur }) => {
    const { colorMode } = useColorMode();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextField
            onFocus={() => {
                setIsFocused(true);
                onFocus && onFocus(); // Call the onFocus handler passed via props
            }}
            onBlur={() => {
                setIsFocused(false);
                onBlur && onBlur(); // Call the onBlur handler passed via props
            }}
            sx={{
                m: 1,
                minWidth: 1000,
                '& .MuiInputLabel-root': {
                    color: isFocused ? (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)') : 'initial', // Change label color on focus
                },
                '& .MuiOutlinedInput-root.Mui-focused': {
                    '& fieldset': {
                        borderColor: (colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)'), // Change border color to red when focused
                    },
                },
            }}
            id="outlined-basic-jsonpath-input"
            label="Enter JSONPath query"
            variant="outlined"
            value={value}
            onChange={onChange}
        />
    );
};

export default JsonPathQueryInput;