import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-github_light_default';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useColorMode } from '@docusaurus/theme-common';
import styles from '../../../pages/tools/xpath.module.css';

// Ensure ace is properly configured
declare const ace: any;
if (typeof ace !== 'undefined' && ace.config) {
  ace.config.setModuleUrl(
    'ace/mode/xml_worker',
    new URL(
      'https://ajaxorg.github.io/ace-builds/src-noconflict/worker-xml.js'
    ).toString(),
  );
}

interface InputTerminalProps {
  fontSize: string;
  value: string;
  onChange: (value: string) => void;
  hasXmlParseError?: boolean;
  mode?: 'xml' | 'text'; // 🔄 new optional mode prop
}

const InputTerminal: React.FC<InputTerminalProps> = ({
  fontSize,
  value,
  onChange,
  hasXmlParseError = false,
  mode = 'xml',
}) => {
  const { colorMode } = useColorMode();

  const terminalClass = hasXmlParseError
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
