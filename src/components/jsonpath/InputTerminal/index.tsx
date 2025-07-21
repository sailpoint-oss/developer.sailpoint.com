import React, { useRef, useCallback } from 'react';
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
  const editorRef = useRef<any>(null);

  const terminalClass = hasJsonParseError
    ? styles.inputTerminalContainer
    : styles.terminalContainerDefault;

  // Handle change with cursor position preservation
  const handleChange = useCallback((newValue: string) => {
    onChange(newValue);
  }, [onChange]);

  // Handle editor load to store reference
  const handleEditorLoad = useCallback((editor: any) => {
    editorRef.current = editor;
    // Set editor options to improve performance and reduce re-renders
    editor.setOptions({
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
    });
  }, []);

  return (
    <div className="col">
      <h2>Inputs</h2>
      <AceEditor
        key="input-terminal" // Stable key to prevent remounting
        className={terminalClass}
        mode={mode}
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}
        value={value}
        onChange={handleChange} // Handle changes in the editor
        onLoad={handleEditorLoad}
        fontSize={`${fontSize}px`} // Set the font size
        width="auto"
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          useWorker: false, // Disable worker to prevent some cursor issues
          wrap: true,
          autoScrollEditorIntoView: true,
          fontFamily: 'monospace',
        }}
      />
    </div>
  );
};

export default InputTerminal;
