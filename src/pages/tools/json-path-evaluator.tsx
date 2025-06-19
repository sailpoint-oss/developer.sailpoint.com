import React, { useState, useCallback, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './json-path.module.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TerminalFontSizeDropdown from '../../components/jsonpath/TerminalFontSizeDropdown';
import InputTerminal from '../../components/jsonpath/InputTerminal';
import ResultTerminal from '../../components/jsonpath/ResultTerminal';
import ImplementationDropdown from '../../components/jsonpath/ImplementationDropdown';
import JsonPathQueryInput from '../../components/jsonpath/JsonPathQueryInput';
import { evaluateJSONPathJava, evaluateJSONPathGo } from '../../services/JSONPathService';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Button from '@mui/material/Button';

// Define the type for implementation options
type ImplementationType = 'EventTrigger' | 'Workflows';

// Define the documentation links type
const documentationLinks: Record<ImplementationType, { url: string; text: string }> = {
  EventTrigger: {
    url: "https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events/",
    text: "Event Trigger Implementation Documentation"
  },
  Workflows: {
    url: "https://github.com/celene-isip-sp/jsonslice?tab=readme-ov-file#specs-and-references",
    text: "Workflows Implementation Documentation"
  }
};

const JsonPathEvaluator: React.FC = () => {
  const [result, setResult] = useState<string>(JSON.stringify([], null, 4));
  const [query, setQuery] = useState<string>('$.requestedItemsStatus[*].name');
  const [queryParseError, setQueryParseError] = useState<string>('');
  const [fontSize, setFontSize] = useState<string>('16');
  const [inputJson, setInputJson] = useState<string>(JSON.stringify(require('./sample.json'), null, 4));
  const [implementation, setImplementation] = useState<ImplementationType>('Workflows');
  const [jsonParseError, setJsonParseError] = useState<boolean>(false);
  const [isQueryFocused, setIsQueryFocused] = useState<boolean>(false);
  const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);
  
  // Refs to track the latest values without causing re-renders
  const queryRef = useRef<string>(query);
  const inputJsonRef = useRef<string>(inputJson);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const { siteConfig } = useDocusaurusContext();

  // Update refs when state changes
  useEffect(() => {
    queryRef.current = query;
  }, [query]);

  useEffect(() => {
    inputJsonRef.current = inputJson;
  }, [inputJson]);

  // Apply JSONPath query with the current implementation
  const applyJsonPathQuery = useCallback(async (json: string, jsonPath: string) => {
    const quoteCount = (jsonPath.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      setResult('No match');
      setQueryParseError('Invalid JSONPath query format');
      return;
    }

    if (jsonPath.length === 1 && jsonPath[0] === '$') {
      setResult(JSON.stringify(json, null, 2));
      return;
    }

    try {
      let result: any;
      let tempResult: any;
      const parsedJson = JSON.parse(json);

      try {
        const apiEndpoint = siteConfig.customFields?.CMS_APP_API_ENDPOINT as string;
        switch (implementation) {
          case 'Workflows':
            tempResult = await evaluateJSONPathGo(apiEndpoint, jsonPath, parsedJson);
            result = tempResult.error ? tempResult.error : tempResult.result;
            break;
          case 'EventTrigger':
            tempResult = await evaluateJSONPathJava(apiEndpoint, jsonPath, parsedJson);
            result = tempResult.error ? tempResult.error : tempResult.result;
            break;
        }
      } catch (error: any) {
        result = error.message;
      }

      setResult((result.length > 0 || typeof result === 'number' || typeof result === 'object' || typeof result === 'boolean') ? JSON.stringify(result, null, 2) : 'No match');
      setQueryParseError('');
      setJsonParseError(false);
    } catch (error: any) {
      setResult('No match');
      setJsonParseError(error.message.includes("JSON at position") || error.message.includes("is not valid JSON"));
      setQueryParseError(error.message || 'Error executing JSONPath query');
    }
  }, [implementation, siteConfig.customFields?.CMS_APP_API_ENDPOINT]);

  // Handle input change with debouncing to prevent cursor issues
  const handleJsonChange = useCallback((newJson: string) => {
    // Update the state immediately for responsive UI
    setInputJson(newJson);
    
    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set a new timer for validation (optional - can be used for auto-validation)
    debounceTimerRef.current = setTimeout(() => {
      // Any additional processing can go here if needed
    }, 300);
  }, []);

  // Handle query input change with useCallback to prevent re-renders
  const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    
    // Clear any existing parse errors when user starts typing
    if (queryParseError) {
      setQueryParseError('');
    }
  }, [queryParseError]);

  // Handle implementation change with useCallback
  const handleImplementationChange = useCallback((newImplementation: ImplementationType) => {
    setImplementation(newImplementation);
  }, []);

  // Handle focus events with useCallback
  const handleQueryFocus = useCallback(() => setIsQueryFocused(true), []);
  const handleQueryBlur = useCallback(() => setIsQueryFocused(false), []);
  const handleDropdownFocus = useCallback(() => setIsDropdownFocused(true), []);
  const handleDropdownBlur = useCallback(() => setIsDropdownFocused(false), []);

  // Run button handler with useCallback
  const handleRunQuery = useCallback(() => {
    applyJsonPathQuery(inputJson, query);
  }, [applyJsonPathQuery, inputJson, query]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.actionBar}>
            <Stack sx={{ justifyContent: 'center' }} direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row' }} spacing={1}>
              <Stack sx={{ justifyContent: 'center' }} spacing={1}>
                <JsonPathQueryInput
                  value={query}
                  onChange={handleQueryChange}
                  onFocus={handleQueryFocus}
                  onBlur={handleQueryBlur}
                />
                {documentationLinks[implementation] && (
                  <Link
                    id='jsonpathDocumentationLink'
                    href={documentationLinks[implementation].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {documentationLinks[implementation].text}
                  </Link>
                )}
                {queryParseError && (
                  <div className={styles.alertContainer}>
                    <Alert id='jsonpathalert' severity="error">{queryParseError}</Alert>
                  </div>
                )}
              </Stack>

              <Stack sx={{ justifyContent: 'flex-start' }} direction={'row'} spacing={1}>
                <ImplementationDropdown
                  implementation={implementation}
                  onImplementationChange={handleImplementationChange}
                  onFocus={handleDropdownFocus}
                  onBlur={handleDropdownBlur}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRunQuery}
                  sx={{ height: '56px', minWidth: 220, maxWidth: 220 }}
                >
                  Run
                </Button>

                <TerminalFontSizeDropdown
                  fontSize={fontSize}
                  onFontSizeChange={setFontSize}
                  onFocus={handleDropdownFocus}
                  onBlur={handleDropdownBlur}
                />
              </Stack>
            </Stack>
          </div>

          <Stack sx={{ justifyContent: 'center' }} direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }} spacing={1}>
            <InputTerminal
              fontSize={fontSize}
              value={inputJson}
              onChange={handleJsonChange}
              hasJsonParseError={jsonParseError}
            />
            <ResultTerminal
              result={result}
              fontSize={fontSize}
            />
          </Stack>
        </div>
      </main>
    </Layout>
  );
};

export default JsonPathEvaluator;
