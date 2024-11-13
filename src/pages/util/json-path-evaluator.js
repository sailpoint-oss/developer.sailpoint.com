import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './json-path.module.css';
import * as jp from 'jsonpathly';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TerminalFontSizeDropdown from '../../components/jsonpath/TerminalFontSizeDropdown';
import InputTerminal from '../../components/jsonpath/InputTerminal';
import ResultTerminal from '../../components/jsonpath/ResultTerminal';
import ImplementationDropdown from '../../components/jsonpath/ImplementationDropdown';
import { useDebounce } from '../../components/jsonpath/useDebounce';

// Mapping of implementations to documentation URLs and texts
const documentationLinks = {
  EventTrigger: {
    url: "https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events/",
    text: "Event Trigger Implementation Documentation"
  },
  Workflows: {
    url: "https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events/",
    text: "Workflows Implementation Documentation"
  }
};

export default function JsonPathEvaluator() {
  const [result, setResult] = useState(JSON.stringify([], null, 4));
  const [query, setQuery] = useState('$.requestedItemsStatus[?(@.name in ["Engineering Access"])]');
  const [queryParseError, setQueryParseError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState('16');
  const [inputJson, setInputJson] = useState(JSON.stringify(require('./sample.json'), null, 4));
  const [implementation, setImplementation] = useState('Workflows');
  const [localJson, setLocalJson] = useState(inputJson);

  const debouncedInputJson = useDebounce(localJson, 100);
  const debouncedQuery = useDebounce(query, 100);

  // Apply JSONPath query with the current implementation
  const applyJsonPathQuery = (json, jsonPath) => {
    setIsLoading(true);

    const quoteCount = (jsonPath.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      setResult('No match');
      setQueryParseError('Invalid JSONPath query format');
      setIsLoading(false);
      return;
    }

    try {
      const parsedJson = JSON.parse(json);
      const result = jp.query(parsedJson, jsonPath, implementation);
      setResult(result.length > 0 ? JSON.stringify(result, null, 2) : 'No match');
      setQueryParseError('');
    } catch (error) {
      setResult('No match');
      setQueryParseError(error.message || 'Error executing JSONPath query');
    } finally {
      setIsLoading(false);
    }
  };

  // Apply the debounced query and input JSON whenever they change
  useEffect(() => {
    if (debouncedQuery || debouncedInputJson) {
      applyJsonPathQuery(debouncedInputJson, debouncedQuery);
    }
  }, [debouncedQuery, debouncedInputJson, implementation]);

  // Handle input change
  const handleJsonChange = (newJson) => {
    setLocalJson(newJson);
  };

  // Handle query input change
  const handleQueryChange = (event) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
    setIsLoading(queryValue.length > 0);
  };

  // Handle implementation change
  const handleImplementationChange = (newImplementation) => {
    setImplementation(newImplementation);
    setIsLoading(true);
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.actionBar}>
            <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ justifyContent: 'center' }} spacing={2}>
                <TextField
                  sx={{ m: 1, minWidth: 1000 }}
                  id="outlined-basic-jsonpath-input"
                  label="Enter JSONPath query"
                  variant="outlined"
                  value={query}
                  onChange={handleQueryChange}
                />
                {queryParseError && <Alert severity="warning">{queryParseError}</Alert>}
                {documentationLinks[implementation] && (
                  <Link
                    href={documentationLinks[implementation].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {documentationLinks[implementation].text}
                  </Link>
                )}
              </Stack>

              <ImplementationDropdown
                implementation={implementation}
                onImplementationChange={handleImplementationChange}
              />

              <TerminalFontSizeDropdown
                fontSize={fontSize}
                onFontSizeChange={setFontSize}
              />
            </Stack>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <InputTerminal
              fontSize={fontSize}
              value={localJson}
              onChange={handleJsonChange}
            />
            <ResultTerminal
              result={result}
              isLoading={isLoading}
              fontSize={fontSize}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
