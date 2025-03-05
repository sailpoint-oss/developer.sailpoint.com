import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json'; // Import mode for JSON
import 'ace-builds/src-noconflict/theme-github_dark'; // Dark theme
import 'ace-builds/src-noconflict/theme-github_light_default'; // Light theme
import 'ace-builds/src-noconflict/ext-language_tools';
import { useColorMode } from '@docusaurus/theme-common';
import styles from '../../../pages/tools/json-path.module.css';

// Ensure ace is properly configured
declare const ace: any;
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/json_worker',
    new URL('ace-builds/src-noconflict/worker-json.js', 'https://ajaxorg.github.io/').toString()
  );
}

// Define props interface
interface ResultTerminalProps {
  result: string;
  fontSize: string;
}

const ResultTerminal: React.FC<ResultTerminalProps> = ({ result, fontSize }) => {
  const { colorMode } = useColorMode();

  return (
    <div className="col" style={{ marginBottom: 50 }}>
      <h2>Evaluation Results</h2>

      <AceEditor
        className={styles.terminalContainerDefault}
        mode="json"
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        value={result}
        readOnly
        fontSize={`${fontSize}px`}
        width="auto"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default ResultTerminal;
