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
      'ace-builds/src-noconflict/worker-json.js',
      'https://ajaxorg.github.io/',
    ).toString(),
  );
}

interface InputTerminalProps {
  fontSize: string;
  value: string;
  onChange: (value: string) => void;
  hasJsonParseError?: boolean;
  mode?: 'json' | 'text'; // 🔄 new optional mode prop
}

const InputTerminal: React.FC<InputTerminalProps> = ({
  fontSize,
  value,
  onChange,
  hasJsonParseError = false,
  mode = 'json', // default to 'json' for backward compatibility
}) => {
  const { colorMode } = useColorMode();

  const terminalClass = hasJsonParseError
    ? styles.inputTerminalContainer
    : styles.terminalContainerDefault;

  return (
    <div className="col">
      <h2>Inputs</h2>
      <AceEditor
        className={terminalClass}
        mode={mode}
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        value={value}
        onChange={onChange}
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

export default InputTerminal;
