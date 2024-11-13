// InputTerminal.js
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';  // Import mode for JSON
import 'ace-builds/src-noconflict/theme-github_dark';  // Dark theme
import 'ace-builds/src-noconflict/theme-github_light_default';  // Light theme
import 'ace-builds/src-noconflict/ext-language_tools';
import { useColorMode } from '@docusaurus/theme-common';

// Ensure ace is properly configured
if (typeof ace !== 'undefined' && ace.config) {
    ace.config.setModuleUrl(
        'ace/mode/json_worker',
        new URL('ace-builds/src-noconflict/worker-json.js', 'https://ajaxorg.github.io/').toString()
    );
}

const InputTerminal = ({ fontSize, value, onChange }) => {
    const { colorMode } = useColorMode();

    return (
        <div className="col" style={{ marginLeft: 75 }}>
            <h2>Inputs</h2>
            <AceEditor
                mode="json"  // Set the mode to JSON for syntax highlighting
                theme={colorMode === 'dark' ? 'github_dark' : 'github_light_default'}  // Switch between dark and light themes based on color mode
                value={value}
                onChange={onChange}  // Handle changes in the editor
                fontSize={`${fontSize}px`}  // Set the font size
                width="auto"
                showPrintMargin={false}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
};

export default InputTerminal;
