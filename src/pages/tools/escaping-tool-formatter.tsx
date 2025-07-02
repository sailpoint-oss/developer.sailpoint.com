import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TerminalFontSizeDropdown from '../../components/jsonpath/TerminalFontSizeDropdown';
import InputTerminal from '../../components/jsonpath/InputTerminal';
import ResultTerminal from '../../components/jsonpath/ResultTerminal';
import styles from './EscapeTool.module.css';

const escapeJavaDotNet = (str: string): string =>
  str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\b/g, '\\b')
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');

const unescapeJavaDotNet = (str: string): string =>
  str
    .replace(/\\t/g, '\t')
    .replace(/\\r/g, '\r')
    .replace(/\\n/g, '\n')
    .replace(/\\f/g, '\f')
    .replace(/\\b/g, '\b')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');

const EscapeTool: React.FC = () => {
  const [mode, setMode] = useState<'escape' | 'unescape'>('escape');
  const [fontSize, setFontSize] = useState<string>('16');
  const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);
  const [inputJson, setInputJson] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<string>('');

  const handleDropdownFocus = () => setIsDropdownFocused(true);
  const handleDropdownBlur = () => setIsDropdownFocused(false);

  const transform = (text: string, mode: 'escape' | 'unescape'): string => {
    try {
      const transformed =
        mode === 'escape' ? escapeJavaDotNet(text) : unescapeJavaDotNet(text);
      return transformed;
    } catch (err) {
      console.error('Error transforming text:', err);
      return '// Invalid input';
    }
  };

  const handleModeToggleAndRun = () => {
    const newMode = mode === 'escape' ? 'unescape' : 'escape';
    setMode(newMode);
    const newResult = transform(inputJson, newMode);
    setResult(newResult);
  };

  const handleCopyResult = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1500);
    } catch (err) {
      console.error('Copy failed', err);
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <Layout description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <h2 className={styles.title}>Java/.NET String Escaper</h2>
          <div className={styles.actionBar}>
            

            <Stack direction="row" spacing={2} mb={2}>
              <Button
                className={styles.runButton}
                variant="contained"
                onClick={handleModeToggleAndRun}
                sx={{height: '56px', minWidth: 220}}>
                {mode === 'escape'
                  ? 'Switch to Unescape'
                  : 'Switch to Escape'}
              </Button>
              <Button
                className={styles.runButton}
                onClick={handleCopyResult}
                variant="outlined"
                size="small"
                sx={{mt: 1}}>
                Copy Result
              </Button>
              <TerminalFontSizeDropdown
                fontSize={fontSize}
                onFontSizeChange={setFontSize}
                onFocus={handleDropdownFocus}
                onBlur={handleDropdownBlur}
              />
            </Stack>
          </div>
          <Stack
            sx={{justifyContent: 'center'}}
            direction={{xs: 'column', lg: 'row'}}
            spacing={1}>
            <InputTerminal
              fontSize={fontSize}
              value={inputJson}
              onChange={setInputJson}
              hasJsonParseError={false}
              mode="text"
            />
            <ResultTerminal mode="text" result={result} fontSize={fontSize} />
          </Stack>
        </div>
      </main>
    </Layout>
  );
};

export default EscapeTool;
