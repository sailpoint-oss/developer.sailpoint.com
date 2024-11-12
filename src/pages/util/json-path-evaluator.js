import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogBanner from '../components/blog/BlogBanner';

import styles from './json-path.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import './json-path.module.css';

import * as jp from "jsonpathly";

import JsonExpressions from './Expressions';
import Sample from './sample.json';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/ext-language_tools.js';

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
    const [resultType, setResultType] = React.useState<'value' | 'path'>('value');
    const [query, setQuery] = React.useState('$.requestedItemsStatus[?(@.name in ["Engineering Access"])]');
    const [isQueryValid, setQueryValid] = React.useState(true);
    const [queryParseError, setQueryParseError] = React.useState('');
  
    const queryInput = React.useRef<HTMLInputElement>(null);
  
    function onChangeJson(input) {
      setInputJson(input);
    }
  
    function onInputQuery(event) {
      const inputQuery = event.target.value;
      setQuery(inputQuery);
    }
  
    function onChangeResultType(event) {
      const type = event.target.checked ? 'path' : 'value';
      setResultType(type);
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
<div className="container-fluid" style={{margin: 50 + 'px'}}>
      <div className="form-floating">
        <input
          style={{width: 500 + 'px', height: 25 + 'px'}}
          id="jsonpath-query"
          type="text"
          className={"form-control " + (isQueryValid ? "" : "is-invalid")}
          placeholder="Put JSONPath syntax"
          value={query}
          onInput={onInputQuery}
          ref={queryInput}
        />
        <label htmlFor="jsonpath-query">
          JSONPath
        </label>
        <div className="invalid-feedback">
          {queryParseError}
        </div>
      </div>

      <div className="row py-2">
        <div className="col-auto">
          <div className="form-check form-switch mt-1">
            <input
              id="path-switch"
              type="checkbox"
              className="form-check-input"
              onChange={onChangeResultType}
            />
            <label
              htmlFor="path-switch"
              className="form-check-label"
            >
              Output paths
            </label>
          </div>
        </div>

        <div className="col-auto">
          <button
            className="btn btn-link btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#jsonPathExpressions"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Expand JSONPath expressions
          </button>
        </div>
      </div>

      {/* <JsonExpressions /> */}

      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <h2>Inputs</h2>
          <AceEditor
            className="editor"
            mode="json"
            theme="solarized_dark"
            onChange={onChangeJson}
            name="editor"
            width="auto"
            editorProps={{ $blockScrolling: true }}
            value={inputJson}
          />
        </div>

        <div className="col">
          <h2>Evaluation Results</h2>
          <AceEditor
            mode="json"
            theme="solarized_dark"
            name="editor"
            width="auto"
            editorProps={{ $blockScrolling: true }}
            value={result}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
}
