import React, { useRef, useCallback } from 'react';
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
interface InputTerminalProps {
  fontSize: string;
  value: string;
  onChange: (value: string) => void;
  hasJsonParseError: boolean;
}

const InputTerminal: React.FC<InputTerminalProps> = ({ fontSize, value, onChange, hasJsonParseError }) => {
  const { colorMode } = useColorMode();
  const editorRef = useRef<any>(null);

  // Dynamic class based on the presence of a JSON parse error
  const terminalClass = hasJsonParseError ? styles.inputTerminalContainer : styles.terminalContainerDefault;

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
        mode="json" // Set the mode to JSON for syntax highlighting
        theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'} // Switch between dark and light themes based on color mode
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
        }}
      />
    </div>
  );
};

export default InputTerminal;
