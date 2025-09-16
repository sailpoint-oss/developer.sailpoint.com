import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-github_light_default';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useColorMode } from '@docusaurus/theme-common';
import styles from '../../../pages/tools/json-path.module.css';

// Ensure ace is properly configured
declare const ace: any;
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/json_worker',
    new URL(
      'ace-builds/src-noconflict/worker-json.js'
    ).toString(),
  );
}

// Props interface with optional `mode`
interface ResultTerminalProps {
  result: string;
  fontSize: string;
  mode?: 'json' | 'text';
}

const ResultTerminal: React.FC<ResultTerminalProps> = ({ result, fontSize, mode = 'json' }) => {
  const { colorMode } = useColorMode();

  return (
    <div className="col" style={{ marginBottom: 50 }}>
      <h2>Evaluation results</h2>

      <AceEditor
        className={styles.terminalContainerDefault}
        mode={mode}
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        value={result}
        readOnly
        fontSize={`${fontSize}px`}
        width="auto"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          fontFamily: 'monospace',
        }}
      />
    </div>
  );
};

export default ResultTerminal;
