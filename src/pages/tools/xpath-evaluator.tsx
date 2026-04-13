import React, {useState} from 'react';
import Layout from '@theme/Layout';
import styles from './xpath.module.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TerminalFontSizeDropdown from '../../components/xpath/TerminalFontSizeDropdown';
import InputTerminal from '../../components/xpath/InputTerminal';
import ResultTerminal from '../../components/xpath/ResultTerminal';
import ImplementationDropdown from '../../components/xpath/ImplementationDropdown';
import XPathQueryInput from '../../components/xpath/XPathQueryInput';
import XPathRootInput from '../../components/xpath/XPathRootInput';
import {
  evaluateXPath,
} from '../../services/XPathService';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Button from '@mui/material/Button';

// Define the type for implementation options
type ImplementationType = 'XPath';

// Define the documentation links type
const documentationLinks: Record<
  ImplementationType,
  {url: string; text: string}
> = {
  XPath: {
    url: 'https://en.wikipedia.org/wiki/XPath',
    text: 'XPath Documentation',
  },
};
  const sampleXmlFile = require('./sample.xml.json')
  let buffer = Buffer.from(sampleXmlFile.xml, 'base64')
  const sampleXml = buffer.toString();
  
  const XPathEvaluator: React.FC = () => {
  const [result, setResult] = useState<string>(JSON.stringify([], null, 4));
  const [query, setQuery] = useState<string>('xhr:Employee_Data/xhr:Personal_Data/xhr:Name_Data/xhr:Legal_Name/xhr:Name_Detail/xhr:Last_Name');
  const [root, setRoot] = useState<string>('//xhr:Response_Data/xhr:Employee');
  const [queryParseError, setQueryParseError] = useState<string>('');
  const [fontSize, setFontSize] = useState<string>('16');
  const [inputXml, setInputXml] = useState<string>(sampleXml);
  const [implementation, setImplementation] =
    useState<ImplementationType>('XPath');
  const [localXml, setLocalXml] = useState<string>(inputXml);
  const [xmlParseError, setXmlParseError] = useState<boolean>(false);
  const [isQueryFocused, setIsQueryFocused] = useState<boolean>(false);
  const [isRootFocused, setIsRootFocused] = useState<boolean>(false);
  const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);
  const {siteConfig} = useDocusaurusContext();

  // Apply XPath query
  const applyXPathQuery = async (xml: string, xPath: string, root: string) => {
    if (xPath.length === 0 || xPath === '//') {
      setResult('[]');
      return;
    }

    try {
      let result: any;
      let tempResult: any;

      try {
        switch (implementation) {
          case 'XPath':
            tempResult = await evaluateXPath(
              'https://o2352gowwy55a4vviyswr76lxu0ednjs.lambda-url.us-east-2.on.aws/',
              xPath,
			  root,
              xml,
            );
            result = tempResult.error ? tempResult.error : tempResult;
            break;
        }
      } catch (error: any) {
        result = error.message;
      }

      setResult(
        result.length > 0 ||
          typeof result === 'number' ||
          typeof result === 'object' ||
          typeof result === 'boolean'
          ? JSON.stringify(result, null, 2)
          : 'No match',
      );
      setQueryParseError('');
      setXmlParseError(false);
    } catch (error: any) {
      setResult('No match');
      setXmlParseError(true);
      setQueryParseError(error.message || 'Error executing XPath query');
    }
  };

  // Handle input change
  const handleXmlChange = (newxml: string) => {
    setLocalXml(newxml);
  };

  // Handle query input change
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handle root input change
  const handleRootChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoot(event.target.value);
  };

  // Handle implementation change
  const handleImplementationChange = (
    newImplementation: ImplementationType,
  ) => {
    setImplementation(newImplementation);
  };

  // Handle focus events
  const handleQueryFocus = () => setIsQueryFocused(true);
  const handleQueryBlur = () => setIsQueryFocused(false);
  const handleRootFocus = () => setIsRootFocused(true);
  const handleRootBlur = () => setIsRootFocused(false);
  const handleDropdownFocus = () => setIsDropdownFocused(true);
  const handleDropdownBlur = () => setIsDropdownFocused(false);

  // Run button handler
  const handleRunQuery = () => {
    applyXPathQuery(localXml, query, root);
  };

  return (
    <Layout title="XPath Evaluator" description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
      <main>
        <div className={styles.containerFluid}>
          <div className={styles.actionBar}>
            <Stack
              sx={{justifyContent: 'center'}}
              direction={{
                xs: 'column',
                sm: 'column',
                md: 'column',
                lg: 'column',
                xl: 'row',
              }}
              spacing={1}>
              <Stack sx={{justifyContent: 'center'}} spacing={1}>
                <XPathRootInput
                  value={root}
                  onChange={handleRootChange}
                  onFocus={handleRootFocus}
                  onBlur={handleRootBlur}
                />
                <XPathQueryInput
                  value={query}
                  onChange={handleQueryChange}
                  onFocus={handleQueryFocus}
                  onBlur={handleQueryBlur}
                />
                {documentationLinks[implementation] && (
                  <Link
                    id="xpathDocumentationLink"
                    href={documentationLinks[implementation].url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {documentationLinks[implementation].text}
                  </Link>
                )}
                {queryParseError && (
                  <div className={styles.alertContainer}>
                    <Alert id="xpathalert" severity="error">
                      {queryParseError}
                    </Alert>
                  </div>
                )}
              </Stack>

			  <Stack
                sx={{justifyContent: 'flex-start'}}
                direction={'row'}
                spacing={1}>
			  {(false && 
				<ImplementationDropdown
                  implementation={implementation}
                  onImplementationChange={handleImplementationChange}
                  onFocus={handleDropdownFocus}
                  onBlur={handleDropdownBlur}
				/>
			  )}
                <Button
                  className={styles.runButton}
                  variant="contained"
                  onClick={handleRunQuery}
                  sx={{height: '56px', minWidth: 220, maxWidth: 220}}>
                  Run
                </Button>

                <TerminalFontSizeDropdown
                  fontSize={fontSize}
                  onFontSizeChange={setFontSize}
                  onFocus={handleDropdownFocus}
                  onBlur={handleDropdownBlur}
                />
              </Stack>
            </Stack>
          </div>

          <Stack
            sx={{justifyContent: 'center'}}
            direction={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
            }}
            spacing={1}>
            <InputTerminal
              fontSize={fontSize}
              value={localXml}
              onChange={handleXmlChange}
              hasXmlParseError={xmlParseError}
            />
            <ResultTerminal result={result} fontSize={fontSize} />
          </Stack>
        </div>
      </main>
    </Layout>
  );
};

export default XPathEvaluator;
