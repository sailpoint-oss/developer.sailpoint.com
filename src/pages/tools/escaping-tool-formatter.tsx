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
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/\t/g, '\\t')
    .replace(/\f/g, '\\f');

const unescapeJavaDotNet = (str: string): string =>
  str
    .replace(/\\t/g, '\t')
    .replace(/\\r/g, '\r')
    .replace(/\\n/g, '\n')
    .replace(/\\f/g, '\f')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');

const EscapeTool: React.FC = () => {
  const [fontSize, setFontSize] = useState<string>('16');
  const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);
  const [inputJson, setInputJson] =
    useState<string>(`import sailpoint.object.ProvisioningPlan;
import sailpoint.object.ProvisioningPlan.AccountRequest;
import sailpoint.api.*;
import sailpoint.object.*;
import sailpoint.server.idnRuleUtil;
import java.util.*;
import org.apache.commons.lang.StringUtils;
import sailpoint.thunderbolt.service.ConnectorService;
import sailpoint.thunderbolt.service.module.ServiceModule;
import sailpoint.rule.Account;
import sailpoint.object.Application;

log.info("Entering : Before operation rule : Going to update the new rule");
String fullUrl = requestEndPoint.getFullUrl();

//String applicationName = "webservice-airtable-tyler";
//
//Account airtableAccount = idn.getAccountByNativeIdentity(application.getName(), provisioningPlan.getNativeIdentity());
//String accountId = (String) idn.getRawAccountAttribute(airtableAccount,"id");

Map requestMap = requestEndPoint.getResMappingObj();
log.info("Before operation rule requestMap:" + requestMap.toString());

fullUrl = fullUrl.replace("accountId","test");

log.info("Before operation rule : the full url" + fullUrl );
requestEndPoint.setFullUrl(fullUrl);`);

  const [result, setResult] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<string>('');

  const handleDropdownFocus = () => setIsDropdownFocused(true);
  const handleDropdownBlur = () => setIsDropdownFocused(false);

  const transform = (text: string, mode: 'escape' | 'unescape'): string => {
    try {
      return mode === 'escape'
        ? escapeJavaDotNet(text)
        : unescapeJavaDotNet(text);
    } catch (err) {
      console.error('Error transforming text:', err);
      return '// Invalid input';
    }
  };

  const handleTransform = (mode: 'escape' | 'unescape') => {
    const newResult = transform(inputJson, mode);
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
    <Layout
      title="Java/.NET String Escaper"
      description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <h2 className={styles.title}>Java/.NET String Escaper</h2>
          <div className={styles.actionBar}>
            <Stack direction="row" spacing={2} mb={2}>
              <Button
                className={styles.runButton}
                variant="contained"
                onClick={() => handleTransform('escape')}
                sx={{height: '56px', minWidth: 160}}>
                Escape
              </Button>
              <Button
                className={styles.runButton}
                variant="contained"
                onClick={() => handleTransform('unescape')}
                sx={{height: '56px', minWidth: 160}}>
                Unescape
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
