import React, { useState, useEffect } from 'react';
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

// Mapping of implementations to documentation URLs and texts
const documentationLinks = {
  EventTrigger: {
    url: "https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events/",
    text: "Event Trigger Implementation Documentation"
  },
  Workflows: {
    url: "https://github.com/celene-isip-sp/jsonslice?tab=readme-ov-file#specs-and-references",
    text: "Workflows Implementation Documentation"
  }
};

export default function JsonPathEvaluator() {
  const [result, setResult] = useState(JSON.stringify([], null, 4));
  const [query, setQuery] = useState('$.requestedItemsStatus[*].name');
  const [queryParseError, setQueryParseError] = useState('');
  const [fontSize, setFontSize] = useState('16');
  const [inputJson, setInputJson] = useState(JSON.stringify(require('./sample.json'), null, 4));
  const [implementation, setImplementation] = useState('Workflows');
  const [localJson, setLocalJson] = useState(inputJson);
  const [jsonParseError, setJsonParseError] = useState(false);
  const [isQueryFocused, setIsQueryFocused] = useState(false);  // Track focus for query input
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);  // Track focus for dropdown
  const { siteConfig } = useDocusaurusContext();

  // Apply JSONPath query with the current implementation
  const applyJsonPathQuery = async (json, jsonPath) => {
    const quoteCount = (jsonPath.match(/"/g) || []).length;
    if (quoteCount % 2 !== 0) {
      setResult('No match');
      setQueryParseError('Invalid JSONPath query format');
      return;
    }

    if (jsonPath.length === 1 && jsonPath[0] === '$') {
      setResult(json, null, 2);
      return;
    }

    try {
      let result;
      let tempResult;
      const parsedJson = JSON.parse(json);

      try {
        switch (implementation) {
          case 'Workflows':
            tempResult = await evaluateJSONPathGo(siteConfig.customFields.CMS_APP_API_ENDPOINT, jsonPath, parsedJson);
            console.log(tempResult);
            if (tempResult.data.error) {
              result = tempResult.data.error;
            } else {  
              result = tempResult.data.result;
            }
            break;
          case 'EventTrigger':

            tempResult = await evaluateJSONPathJava(siteConfig.customFields.CMS_APP_API_ENDPOINT, jsonPath, parsedJson);
            if (tempResult.data.error) {
              result = tempResult.data.error;
            } else {
              result = tempResult.data.result;
            }

            break;
        }
      } catch (error) {
        result = error.message;
      }
      
      setResult((result.length > 0 || typeof result === 'number' || typeof result === 'object' || typeof result === 'boolean') ? JSON.stringify(result, null, 2) : 'No match');
      setQueryParseError('');
      setJsonParseError(false);
    } catch (error) {
      setResult('No match');
      if (error.message.includes("JSON at position") || error.message.includes("is not valid JSON")) {
        setJsonParseError(true);
      } else {
        setJsonParseError(false);
      }
      setQueryParseError(error.message || 'Error executing JSONPath query');
    }
  };

  // Handle input change
  const handleJsonChange = (newJson) => {
    setLocalJson(newJson);
  };

  // Handle query input change
  const handleQueryChange = (event) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
  };

  // Handle implementation change
  const handleImplementationChange = (newImplementation) => {
    setImplementation(newImplementation);
  };

  // Handle focus for JsonPath query input
  const handleQueryFocus = () => {
    setIsQueryFocused(true);
  };

  const handleQueryBlur = () => {
    setIsQueryFocused(false);
  };

  // Handle focus for Implementation Dropdown
  const handleDropdownFocus = () => {
    setIsDropdownFocused(true);
  };

  const handleDropdownBlur = () => {
    setIsDropdownFocused(false);
  };

  // Add a handler for the Run button
  const handleRunQuery = () => {
    applyJsonPathQuery(localJson, query);
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.actionBar}>
            <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ justifyContent: 'center' }} spacing={2}>
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
                <div className={styles.alertContainer}>
                  {queryParseError && <Alert id='jsonpathalert' severity="error">{queryParseError}</Alert>}
                </div>
              </Stack>

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
                sx={{ height: '56px' }}
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
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <InputTerminal
              fontSize={fontSize}
              value={localJson}
              onChange={handleJsonChange}
              hasJsonParseError={jsonParseError}
            />
            <ResultTerminal
              result={result}
              fontSize={fontSize}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
