import React from 'react';
import Layout from '@theme/Layout';
import styles from './json-path.module.css';
import * as jp from "jsonpathly";
import JsonExpressions from './Expressions';
import Sample from './sample.json';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-github_light_default';
import 'ace-builds/src-noconflict/ext-language_tools.js';
import { useColorMode } from '@docusaurus/theme-common';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Ensure `ace` is defined before accessing its configuration
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/json_worker',
    new URL('ace-builds/src-noconflict/worker-json.js', 'https://ajaxorg.github.io/').toString()
  );
}

export default function JsonPathEvaluator() {

  const [inputJson, setInputJson] = React.useState(JSON.stringify(Sample, null, 4));
  const [result, setResult] = React.useState(JSON.stringify([], null, 4));
  const [resultType, setResultType] = React.useState < 'value' | 'path' > ('value');
  const [query, setQuery] = React.useState('$.requestedItemsStatus[?(@.name in ["Engineering Access"])]');
  const [isQueryValid, setQueryValid] = React.useState(true);
  const [queryParseError, setQueryParseError] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [fontSize, setFontSize] = React.useState('');


  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);  // Toggle the visibility
  };

  const InputTerminal = () => {
    const { colorMode, setColorMode } = useColorMode();


    return (<div className="col">
      <h2>Inputs</h2>
      <AceEditor
        className="editor"
        mode="json"
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        onChange={onChangeJson}
        name="editor"
        width="auto"
        editorProps={{ $blockScrolling: true }}
        value={inputJson}
        showPrintMargin={false}
        fontSize={fontSize === '' ? '16px' : `${fontSize}px`}
      />
    </div>
    )
  }

  const ResultTerminal = () => {
    const { colorMode, setColorMode } = useColorMode();
    return (<div className="col">
      <h2>Evaluation Results</h2>
      <AceEditor
        mode="json"
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        name="editor"
        width="auto"
        editorProps={{ $blockScrolling: true }}
        value={result}
        readOnly={true}
        showPrintMargin={false}
        fontSize={fontSize === '' ? '16px' : `${fontSize}px`}
      />
    </div>)
  }

  function onSelectFontSize(event) {
    const inputQuery = event.target.value;
    setFontSize(inputQuery);
  }

  const queryInput = React.useRef < HTMLInputElement > (null);

  function onChangeJson(input) {
    setInputJson(input);
  }

  function onInputQuery(event) {
    const inputQuery = event.target.value;
    setQuery(inputQuery);
  }

  function applyJsonPath(jsonStr, jsonPath) {
    let json = '';
    let result = '';

    try {
      json = JSON.parse(jsonStr.replace(/(\r\n|\n|\r)/gm, ''));
    } catch (error) {
      setResult('JSON Parse Error');
      return;
    }

    try {
      result = jp.query(json, jsonPath);
      setQueryValid(true);
      setQueryParseError('');
    } catch (error) {
      console.log(error)
      setQueryValid(false);
      if (error instanceof Error) {
        setQueryParseError(error.message);
      }
    }

    console.log(result)

    if (0 < result?.length) {
      setResult(JSON.stringify(result, undefined, 2));
    } else {
      setResult('No match');
    }
  }

  React.useEffect(() => {
    applyJsonPath(inputJson, query);
  });

  React.useEffect(() => {
    queryInput.current?.focus();
  }, []);

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>

        <div className={styles.containerFluid}>
          <div className={styles.expandExpressions}>
            <Stack sx={{ justifyContent: 'center' }} spacing={2}>
              <TextField sx={{ m: 1, minWidth: 1000 }} id="outlined-basic" label="Put JSONPath syntax" variant="outlined" value={query} onInput={onInputQuery} ref={queryInput} />

              {queryParseError ?
              <Alert severity="warning">{queryParseError}</Alert> : '' }

              <Stack sx={{ justifyContent: 'center' }} direction="row" spacing={2}>

                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="terminal-font-size-label">Terminal Font Size</InputLabel>
                  <Select
                    labelId="terminal-font-size-label"
                    id="terminal-font-size-select"
                    value={fontSize}
                    label="Terminal Font Size"
                    onChange={onSelectFontSize}
                  >
                    <MenuItem value={'12'}>Small</MenuItem>
                    <MenuItem value={'16'}>Medium</MenuItem>
                    <MenuItem value={'18'}>Large</MenuItem>
                    <MenuItem value={'24'}>Extra Large</MenuItem>
                  </Select>
                </FormControl>

                <Button variant="outlined" onClick={toggleVisibility} >{isVisible ? 'Collapse JSONPath expressions' : 'Expand JSONPath expressions'}</Button>

              </Stack>
            </Stack>
          </div>

          {/* Conditionally render JsonExpressions based on the isVisible state */}
          {isVisible && (
            <div id="jsonPathExpressions">
              <JsonExpressions />
            </div>
          )}



          <div className="row row-cols-1 row-cols-md-2">
            <InputTerminal />
            <ResultTerminal />
          </div>
        </div>
      </main>
    </Layout>
  );
}
