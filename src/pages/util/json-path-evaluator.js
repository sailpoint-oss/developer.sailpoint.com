import React, { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import styles from './json-path.module.css';
import * as jp from 'jsonpathly';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-github_light_default';
import 'ace-builds/src-noconflict/ext-language_tools.js';
import { useColorMode } from '@docusaurus/theme-common';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

// Ensure ace is properly configured
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/json_worker',
    new URL('ace-builds/src-noconflict/worker-json.js', 'https://ajaxorg.github.io/').toString()
  );
}

export default function JsonPathEvaluator() {
  const [inputJson, setInputJson] = useState(JSON.stringify(require('./sample.json'), null, 4));
  const [result, setResult] = useState(JSON.stringify([], null, 4));
  const [query, setQuery] = useState('$.requestedItemsStatus[?(@.name in ["Engineering Access"])]');
  const [queryParseError, setQueryParseError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState('16');
  const queryInput = useRef(null);

  // Use a ref to store the last parsed JSON object
  const parsedJsonRef = useRef(null);
  const prevJsonStrRef = useRef('');

  // Debounce the JSON input and the query with 3-second delay
  const debouncedInputJson = useDebounce(inputJson, 3000); // 3 seconds debounce
  const debouncedQuery = useDebounce(query, 3000);

  // Function to apply JSONPath query to JSON (debounced version for query execution)
  const applyJsonPathQuery = (json, jsonPath) => {
    let result;

    // Start loading before applying the query
    console.log('Applying query...');


    try {
      // Apply the JSONPath query
      result = jp.query(json, jsonPath);
      if (result.length > 0) {
        setResult(JSON.stringify(result, null, 2));
      } else {
        setResult('No match');
      }
      setQueryParseError('');
    } catch (error) {
      console.error('Query Execution Error:', error);
      setResult('No match');
      setQueryParseError(error.message || 'Error executing JSONPath query');
    } finally {
      // Stop loading after the query is complete (whether success or error)
      console.log('Finished querying');
      setIsLoading(false);
    }
  };

  // Function to apply JSONPath query to the input JSON (without debouncing)
  const applyJsonPath = (jsonStr, jsonPath) => {
    let json;
    setIsLoading(true);
    // Check if the new JSON string is different from the previous one
    if (jsonStr !== prevJsonStrRef.current) {
      try {
        // Only parse if the JSON string is different
        console.log('Parsing JSON...');
        json = JSON.parse(jsonStr.replace(/(\r\n|\n|\r)/gm, ''));
        parsedJsonRef.current = json; // Update the stored parsed JSON
        prevJsonStrRef.current = jsonStr; // Update the previous JSON string
      } catch (error) {
        console.error('JSON Parse Error:', error);
        setResult('JSON Parse Error');
        setIsLoading(false); // Stop loading if parsing fails
        return;
      }
    } else {
      // Reuse the parsed JSON if the string hasn't changed
      json = parsedJsonRef.current;
    }

    // Call the debounced query function
    applyJsonPathQuery(json, jsonPath);
  };

  // When the input JSON or query changes, apply the JSONPath query
  useEffect(() => {
    if (debouncedQuery) {
      // Only apply the query if the debounced query has changed
      applyJsonPath(inputJson, debouncedQuery);
    }
  }, [debouncedQuery, inputJson]);

  // Focus on query input field on component mount
  useEffect(() => {
    if (queryInput.current) {
      queryInput.current.focus();
    }
  }, []);

  // Handler for changing JSON input
  const handleJsonChange = (newJson) => {
    setInputJson(newJson);
  };

  // Handler for changing JSONPath query
  const handleQueryChange = (event) => {
    setIsLoading(true);
    setQuery(event.target.value);
  };

  // Handler for selecting font size
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  // Editor for input JSON
  const InputTerminal = () => {
    const { colorMode } = useColorMode();
    return (
      <div className="col">
        <h2>Inputs</h2>
        <AceEditor
          className="editor"
          mode="json"
          theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
          onChange={handleJsonChange}
          value={inputJson}
          fontSize={`${fontSize}px`}
          width="auto"
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  };

  // Editor for displaying the results
  const ResultTerminal = () => {
    const { colorMode } = useColorMode();
    return (
      <div className="col">
        <h2>Evaluation Results</h2>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="200px">
            <CircularProgress />
          </Box>
        ) : (
          <AceEditor
            mode="json"
            theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
            value={result}
            readOnly
            fontSize={`${fontSize}px`}
            width="auto"
            showPrintMargin={false}
            editorProps={{ $blockScrolling: true }}
          />
        )}
      </div>
    );
  };

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.expandExpressions}>
            <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ justifyContent: 'center' }} spacing={2}>
                <TextField
                  sx={{ m: 1, minWidth: 1000 }}
                  id="outlined-basic-jsonpath-input"
                  label="Enter JSONPath query"
                  variant="outlined"
                  value={query}
                  onChange={handleQueryChange}
                  ref={queryInput}
                />
                {queryParseError && <Alert severity="warning">{queryParseError}</Alert>}
              </Stack>

              <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="terminal-font-size-label">Terminal Font Size</InputLabel>
                <Select
                  labelId="terminal-font-size-label"
                  id="terminal-font-size-select"
                  value={fontSize}
                  label="Terminal Font Size"
                  onChange={handleFontSizeChange}
                >
                  <MenuItem value={'12'}>Small</MenuItem>
                  <MenuItem value={'16'}>Medium</MenuItem>
                  <MenuItem value={'18'}>Large</MenuItem>
                  <MenuItem value={'24'}>Extra Large</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </div>


          <div className="row row-cols-1 row-cols-md-2">
            <InputTerminal />
            <ResultTerminal />
          </div>
        </div>
      </main>
    </Layout>
  );
}
