import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import React, { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/mode-velocity';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-github_light_default';

import styles from './VelocityPlayGround.module.css';

const Velocity: any = require('velocityjs');

// Ensure ace is properly configured
declare const ace: any;
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/json_worker',
    new URL(
      'https://ajaxorg.github.io/ace-builds/src-noconflict/worker-json.js'
    ).toString(),
  );
}

type RenderState = {
  output: string;
  error?: string;
};

type DateInput = Date | string | number | undefined | null;
type AddUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';

const pad = (n: number, len = 2) => String(n).padStart(len, '0');

function toDate(input?: DateInput) {
  if (input == null) return new Date(NaN);
  if (input instanceof Date) return new Date(input.getTime());
  return new Date(input);
}

function normalizePattern(fmt: string) {
  return fmt
    .replace(/yyyy/g, 'YYYY')
    .replace(/\byy\b/g, 'YY')
    .replace(/dd/g, 'DD')
    ;
}

function formatWithTokens(d: Date, fmt: string) {
  const tzOffsetMin = -d.getTimezoneOffset(); 
  const sign = tzOffsetMin >= 0 ? '+' : '-';
  const abs = Math.abs(tzOffsetMin);
  const offHH = pad(Math.floor(abs / 60));
  const offMM = pad(abs % 60);

  return fmt
    .replace(/YYYY/g, String(d.getFullYear()))
    .replace(/YY/g, String(d.getFullYear()).slice(-2))
    .replace(/MM/g, pad(d.getMonth() + 1))
    .replace(/DD/g, pad(d.getDate()))
    .replace(/HH/g, pad(d.getHours()))
    .replace(/mm/g, pad(d.getMinutes()))
    .replace(/ss/g, pad(d.getSeconds()))
    .replace(/ZZ/g, `${sign}${offHH}:${offMM}`)
    .replace(/Z/g, `${sign}${offHH}`);
}

const dateTool = {
  now(): Date {
    return new Date();
  },

  parse(input?: DateInput): Date {
    return toDate(input);
  },


  format(fmt: string, input?: DateInput): string {
    const d = input ? toDate(input) : new Date();
    if (isNaN(d.getTime())) return 'Invalid Date';
    const normalized = normalizePattern(fmt);
    return formatWithTokens(d, normalized);
  },

  add(input: DateInput, amount: number, unit: AddUnit): Date {
    const d = toDate(input ?? new Date());
    if (isNaN(d.getTime())) return new Date(NaN);
    const nd = new Date(d.getTime());
    switch (unit) {
      case 'seconds':
        nd.setSeconds(nd.getSeconds() + amount);
        break;
      case 'minutes':
        nd.setMinutes(nd.getMinutes() + amount);
        break;
      case 'hours':
        nd.setHours(nd.getHours() + amount);
        break;
      case 'days':
        nd.setDate(nd.getDate() + amount);
        break;
      case 'months':
        nd.setMonth(nd.getMonth() + amount);
        break;
      case 'years':
        nd.setFullYear(nd.getFullYear() + amount);
        break;
    }
    return nd;
  },

  iso(input?: DateInput): string {
    const d = input ? toDate(input) : new Date();
    return isNaN(d.getTime()) ? 'Invalid Date' : d.toISOString();
  },
};


const SAMPLE_JSON = `
{
        "reauthorizationRequired": false,
        "name": "Chemists",
        "type": "ENTITLEMENT",
        "id": "8f2d16f25ee736cc9f6d55a7ad3f423a",
        "cancelledRequestDetails": null,
        "errorMessages": null,
        "state": "REQUEST_COMPLETED",
        "approvalDetails": [],
        "approvalIds": [],
        "manualWorkItemDetails": null,
        "accessRequestPhases": [
            {
                "started": "2025-08-20T22:32:41.198121Z",
                "finished": "2025-08-20T22:32:44.375348Z",
                "name": "PROVISIONING_PHASE",
                "result": "SUCCESSFUL",
                "state": "COMPLETED",
                "phaseReference": null
            }
        ],
        "accountActivityItemId": "787062231a5e4a40a794e8a88cb7f6b9",
        "requestType": "REVOKE_ACCESS",
        "modified": "2025-08-20T22:32:47.777Z",
        "created": "2025-08-20T22:32:40.910Z",
        "requester": {
            "type": "IDENTITY",
            "id": "90fa418f8c17490ebbb27c65712d4ab7",
            "name": "Prasad.Uplenchwar"
        },
        "requestedFor": {
            "type": "IDENTITY",
            "id": "3dbd66045c1541deb15ae4ee91545d44",
            "name": "Prasad.U"
        },
        "requesterComment": {
            "comment": "Test",
            "author": {
                "type": "IDENTITY",
                "id": "90fa418f8c17490ebbb27c65712d4ab7",
                "name": "Prasad.Uplenchwar"
            },
            "created": "2025-08-20T22:32:40.910Z"
        },
        "sodViolationContext": null,
        "provisioningDetails": null,
        "preApprovalTriggerDetails": null,
        "description": "All Chemists in Ascoop",
        "removeDate": null,
        "cancelable": false,
        "accessRequestId": "e8b5a97c922947528e7b0970dab2c786",
        "clientMetadata": null,
        "accessRequestContext": null,
        "requestedAccounts": [
            {
                "sourceName": "GK AD",
                "accountId": "CN\u003dPrasad.U,OU\u003daccounts,OU\u003dascoopiam,DC\u003dascoop,DC\u003dorg",
                "accountUuid": null,
                "type": "ACCOUNT",
                "id": null,
                "name": "Prasad.U"
            }
        ],
        "privilegeLevel": null
    }`;

const SAMPLE_TEMPLATE = `#macro(renderProvisioningPhaseIST $phases)
#foreach($phase in $phases)
#if($phase.name == "PROVISIONING_PHASE" && $phase.state == "COMPLETED")
Access Request Phase Name: $phase.name
#if($phase.started)
Access Request Started (IST): $date.format("yyyy-MM-dd HH:mm:ss", $phase.started)
#else
Access Request Started: Not Available
#end
#if($phase.finished)
Access Request Finished (IST): $date.format("yyyy-MM-dd HH:mm:ss", $phase.finished)
#else
Access Request Finished: Not Available
#end
Access Request Result: $phase.result
Access Request State: $phase.state
#end
#end
#end
## Usage Example:
#renderProvisioningPhaseIST($accessRequestPhases)
`;

const LS_KEYS = {
  json: 'velocity-playground:json',
  tpl: 'velocity-playground:template'
};

function useLocalStorageState(key: string, initial: string) {
  const [val, setVal] = useState<string>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      return saved ?? initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, val);
    } catch {
      // ignore
    }
  }, [key, val]);

  return [val, setVal] as const;
}

// Wrapper component for the editors that needs to be inside Layout
function VelocityEditor({
  jsonText,
  setJsonText,
  template,
  setTemplate,
  state,
  data,
  formatJson,
  copyOutput,
  resetSample,
  forceRender,
}: {
  jsonText: string;
  setJsonText: (val: string) => void;
  template: string;
  setTemplate: (val: string) => void;
  state: RenderState;
  data: { value: Record<string, unknown> | undefined; error: string | undefined };
  formatJson: () => void;
  copyOutput: () => Promise<void>;
  resetSample: () => void;
  forceRender: () => void;
}) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.title}>Velocity Playground</div>
        <div className={styles.actions}>
          <button
            className={styles.runButton}
            onClick={formatJson} 
            title="Prettify JSON (Ctrl/Cmd+Enter to render)">
            Format JSON
          </button>
          <button 
            className={styles.runButton}
            onClick={copyOutput} 
            disabled={!state.output}>
            Copy Output
          </button>
          <button 
            className={styles.runButton}
            onClick={resetSample}>
            Reset Sample
          </button>
        </div>
      </header>

      <main className={styles.grid}>
        <section className={styles.pane}>
          <div className={styles.paneHeader}>
            <span>JSON Input</span>
            {data.error && <span className={`${styles.badge} ${styles.badgeError}`}>Invalid</span>}
          </div>
          <AceEditor
            className={data.error ? styles.editorError : styles.editor}
            mode="json"
            theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
            value={jsonText}
            onChange={setJsonText}
            name="json-input-editor"
            fontSize="14px"
            width="100%"
            height="400px"
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              fontFamily: 'monospace',
              useWorker: true,
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              wrap: true,
            }}
            onLoad={(editor) => {
              // Explicitly set the mode
              editor.session.setMode('ace/mode/json');
              // Enable JSON validation
              editor.session.setUseWorker(true);
              // Add keyboard shortcut
              editor.commands.addCommand({
                name: 'render',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: forceRender,
              });
            }}
          />
          {data.error ? (
            <div className={styles.error}>JSON Error: {data.error}</div>
          ) : (
            <div className={styles.hint}>Tip: Press Ctrl/Cmd + Enter to render</div>
          )}
        </section>

        <section className={styles.pane}>
          <div className={styles.paneHeader}>
            <span>Velocity Template</span>
          </div>
          <AceEditor
            className={styles.editor}
            mode="velocity"
            theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
            value={template}
            onChange={setTemplate}
            name="velocity-template-editor"
            fontSize="14px"
            width="100%"
            height="400px"
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              fontFamily: 'monospace',
              useWorker: false,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
              wrap: true,
            }}
            onLoad={(editor) => {
              // Explicitly set the mode
              editor.session.setMode('ace/mode/velocity');
              // Add keyboard shortcut
              editor.commands.addCommand({
                name: 'render',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: forceRender,
              });
            }}
          />
          <div className={styles.hint}>
            Supports directives like <code>#foreach</code>, <code>#if</code>, and variables like{' '}
            <code>$now</code>, <code>#macros</code>.
          </div>
        </section>

        <section className={styles.pane}>
          <div className={styles.paneHeader}>
            <span> Output</span>
            {state.error && <span className={`${styles.badge} ${styles.badgeError}`}>Error</span>}
          </div>
          <AceEditor
            className={styles.editor}
            mode="text"
            theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
            value={state.error ? state.error : state.output}
            readOnly
            name="output-editor"
            fontSize="14px"
            width="100%"
            height="400px"
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={false}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              fontFamily: 'monospace',
              useWorker: false,
              showLineNumbers: true,
              wrap: true,
            }}
          />
        </section>
      </main>
    </div>
  );
}

export default function VelocityPlayground(): ReactNode {
  const [jsonText, setJsonText] = useLocalStorageState(LS_KEYS.json, SAMPLE_JSON);
  const [template, setTemplate] = useLocalStorageState(LS_KEYS.tpl, SAMPLE_TEMPLATE);
  const [state, setState] = useState<RenderState>({ output: '' });
  const timeoutRef = useRef<number | null>(null);

  const data = useMemo(() => {
    try {
      const parsed = JSON.parse(jsonText);
      return { value: parsed as Record<string, unknown>, error: undefined };
    } catch (e: any) {
      return { value: undefined, error: e?.message ?? 'Invalid JSON' };
    }
  }, [jsonText]);

  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      try {
        if (data.error) {
          setState({ output: '', error: `JSON Error: ${data.error}` });
          return;
        }
      const ctx = { ...(data.value || {}), date: dateTool };
      const output: string = Velocity.render(template, ctx);

        setState({ output, error: undefined });
      } catch (e: any) {
        setState({
          output: '',
          error: `Template Error: ${e?.message ?? 'Unknown error while rendering template'}`,
        });
      }
    }, 200); 

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [template, data.error, data.value]);

  const forceRender = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    try {
      if (data.error) {
        setState({ output: '', error: `JSON Error: ${data.error}` });
        return;
      }
      const output: string = Velocity.render(template, data.value || {});
      setState({ output, error: undefined });
    } catch (e: any) {
      setState({
        output: '',
        error: `Template Error: ${e?.message ?? 'Unknown error while rendering template'}`,
      });
    }
  };

  const formatJson = () => {
    try {
      const obj = JSON.parse(jsonText);
      setJsonText(JSON.stringify(obj, null, 2));
    } catch {
      // ignore
    }
  };

  const resetSample = () => {
    setJsonText(SAMPLE_JSON);
    setTemplate(SAMPLE_TEMPLATE);
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(state.output ?? '');
    } catch {
      // ignore
    }
  };

  return (
    <>
      {/* @ts-expect-error Docusaurus Layout type issue */}
      <Layout 
        title="Velocity PlayGround" 
        description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."
      >
        <main>
          <VelocityEditor
            jsonText={jsonText}
            setJsonText={setJsonText}
            template={template}
            setTemplate={setTemplate}
            state={state}
            data={data}
            formatJson={formatJson}
            copyOutput={copyOutput}
            resetSample={resetSample}
            forceRender={forceRender}
          />
        </main>
      </Layout>
    </>
  );
}