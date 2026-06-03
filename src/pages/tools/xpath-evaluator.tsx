import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';
import InputTerminal from '../../components/jsonpath/InputTerminal';
import ResultTerminal from '../../components/jsonpath/ResultTerminal';
import TerminalFontSizeDropdown from '../../components/jsonpath/TerminalFontSizeDropdown';
import styles from './json-path.module.css';
import {
  evaluateXPath,
  serializeResources,
  type AttributeMappings,
  type NamespaceMappings,
} from '../../services/XPathService';

const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<employees>
  <employee>
    <id>001</id>
    <name>Alice Johnson</name>
    <department>Engineering</department>
  </employee>
  <employee>
    <id>002</id>
    <name>Bob Smith</name>
    <department>Marketing</department>
  </employee>
</employees>`;

const SAMPLE_ATTRIBUTE_MAPPINGS = JSON.stringify(
  { id: 'id', name: 'name', department: 'department' },
  null,
  2,
);

const XPathQueryInput: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
}> = ({ label, value, onChange }) => {
  const { colorMode } = useColorMode();
  const [isFocused, setIsFocused] = useState(false);

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? '#ffffff' : 'initial',
              borderWidth: 1,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={{
          m: 1,
          minWidth: 600,
          '& .MuiInputLabel-root': {
            color: isFocused
              ? colorMode === 'dark'
                ? 'rgb(115,200,235)'
                : 'rgb(4,125,246)'
              : 'initial',
          },
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            borderColor: colorMode === 'dark' ? 'rgb(115,200,235)' : 'rgb(4,125,246)',
          },
        }}
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </ThemeProvider>
  );
};

const XPathEvaluator: React.FC = () => {
  const [xml, setXml] = useState(SAMPLE_XML);
  const [rootPath, setRootPath] = useState('//employee');
  const [attributeMappingsJson, setAttributeMappingsJson] = useState(SAMPLE_ATTRIBUTE_MAPPINGS);
  const [result, setResult] = useState('[]');
  const [fontSize, setFontSize] = useState('16');
  const [error, setError] = useState('');
  const [mappingsParseError, setMappingsParseError] = useState(false);

  const runEvaluation = () => {
    setError('');
    setMappingsParseError(false);

    let attributeMappings: AttributeMappings = new Map();
    if (attributeMappingsJson.trim()) {
      try {
        const parsed = JSON.parse(attributeMappingsJson);
        attributeMappings = new Map(Object.entries(parsed));
      } catch {
        setMappingsParseError(true);
        setError('Attribute mappings must be valid JSON (e.g. {"id": "id", "name": "name"})');
        return;
      }
    }

    const namespaceMappings: NamespaceMappings = new Map();
    const { resources, error: evalError } = evaluateXPath(
      xml,
      rootPath,
      attributeMappings,
      namespaceMappings,
    );

    if (evalError) {
      setError(evalError);
      setResult('[]');
      return;
    }

    const serialized = serializeResources(resources);
    try {
      setResult(JSON.stringify(JSON.parse(serialized), null, 2));
    } catch {
      setResult(serialized);
    }
  };

  return (
    <Layout
      title="XPath Evaluator"
      description="Test XPath expressions against XML using SailPoint's XmlResponseParser logic.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.actionBar}>
            <Stack
              direction={{ xs: 'column', lg: 'row' }}
              spacing={1}
              sx={{ justifyContent: 'center' }}>
              <Stack spacing={1}>
                <XPathQueryInput
                  label="XPath root path (e.g. //employee)"
                  value={rootPath}
                  onChange={setRootPath}
                />
                {error && (
                  <div className={styles.alertContainer}>
                    <Alert severity="error">{error}</Alert>
                  </div>
                )}
              </Stack>
              <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-start' }}>
                <Button
                  className={styles.runButton}
                  variant="contained"
                  onClick={runEvaluation}
                  sx={{ height: '56px', minWidth: 220, maxWidth: 220, m: 1 }}>
                  Run
                </Button>
                <TerminalFontSizeDropdown
                  fontSize={fontSize}
                  onFontSizeChange={setFontSize}
                />
              </Stack>
            </Stack>
          </div>

          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={1}
            sx={{ justifyContent: 'center' }}>
            <InputTerminal
              fontSize={fontSize}
              value={xml}
              onChange={setXml}
              mode="text"
            />

            <div className="col">
              <h2>Attribute Mappings (JSON)</h2>
              <p style={{ fontSize: '0.85rem', marginBottom: 8 }}>
                Map output field names to XPath expressions evaluated per matched node.
              </p>
              <InputTerminal
                fontSize={fontSize}
                value={attributeMappingsJson}
                onChange={setAttributeMappingsJson}
                mode="json"
                hasJsonParseError={mappingsParseError}
              />
            </div>

            <ResultTerminal result={result} fontSize={fontSize} mode="json" />
          </Stack>
        </div>
      </main>
    </Layout>
  );
};

export default XPathEvaluator;
