import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import styles from './xpath.module.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TerminalFontSizeDropdown from '../../components/xpath/TerminalFontSizeDropdown';
import InputTerminal from '../../components/xpath/InputTerminal';
import type {HoverValuePayload} from '../../components/xpath/InputTerminal';
import ResultTerminal from '../../components/xpath/ResultTerminal';
import XPathRootInput from '../../components/xpath/XPathRootInput';
import {
  evaluateXPathMappings,
  XPathEvaluationError,
  type AttributeMappings,
} from '../../services/XPathService';
import Button from '@mui/material/Button';

// Define the type for implementation options
type ImplementationType = 'XPath';
type HoverXPathMatch = {
  occurrence: number;
  elementPath: string;
  exactNodePath: string;
};

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
const sampleXmlFile = require('./sample.xml.json');
let buffer = Buffer.from(sampleXmlFile.xml, 'base64');
const sampleXml = buffer.toString();

const XPathEvaluator: React.FC = () => {
  const [result, setResult] = useState<string>(JSON.stringify([], null, 4));
  const [attributeMappingsInput, setAttributeMappingsInput] = useState<string>(
    JSON.stringify(
      {
        firstName:
          'xhr:Employee_Data/xhr:Personal_Data/xhr:Name_Data/xhr:Legal_Name/xhr:Name_Detail/xhr:First_Name',
        lastName:
          'xhr:Employee_Data/xhr:Personal_Data/xhr:Name_Data/xhr:Legal_Name/xhr:Name_Detail/xhr:Last_Name',
        employeeId:
          "xhr:Employee_Reference/xhr:ID[@xhr:type='Employee_Number']",
        phoneNumber:
          'xhr:Employee_Data/xhr:Personal_Data/xhr:Contact_Data/xhr:Phone/xhr:Formatted_Number',
        workRegion:
          "xhr:Employee_Data/xhr:Employment_Data/xhr:Worker_Job_Data/xhr:Position_Data/xhr:Business_Site_Summary_Data[xhr:Usage/xhr:Type_Info/@xhr:Primary='true']/xhr:Address/xhr:Region_Reference/xhr:ID[@xhr:type='Region_Code']",
        ssnNationalId:
          "xhr:Employee_Data/xhr:Personal_Data/xhr:Identification_Data/xhr:National_ID[xhr:National_ID_Detail/xhr:ID_Type_Reference/xhr:ID[@xhr:type='National_ID_Type']='USA-SSN']/xhr:National_ID_Detail/xhr:Value"
      },
      null,
      2,
    ),
  );
  const [root, setRoot] = useState<string>('//xhr:Response_Data/xhr:Employee');
  const [queryParseError, setQueryParseError] = useState<string>('');
  const [isAttributeMappingsParseError, setIsAttributeMappingsParseError] =
    useState<boolean>(false);
  const [fontSize, setFontSize] = useState<string>('16');
  const implementation: ImplementationType = 'XPath';
  const inputXml = sampleXml;
  const [localXml, setLocalXml] = useState<string>(inputXml);
  const [xmlParseError, setXmlParseError] = useState<boolean>(false);
  const [hoverXPathHintMessage, setHoverXPathHintMessage] = useState<string>(
    'Hover an XML value to see its XPath.',
  );
  const [hoverXPathMatches, setHoverXPathMatches] = useState<HoverXPathMatch[]>(
    [],
  );
  const [isHoverLocked, setIsHoverLocked] = useState<boolean>(false);
  const [lockedHoverValue, setLockedHoverValue] =
    useState<HoverValuePayload | null>(null);
  const hoverClearTimeoutRef = useRef<number | null>(null);
  const lastRenderedHoverKeyRef = useRef<string>('');

  const getElementXPath = (element: Element): string => {
    const segments: string[] = [];
    let current: Element | null = element;

    while (current) {
      segments.unshift(current.tagName);
      current = current.parentElement;
    }

    return `/${segments.join('/')}`;
  };

  const resolveXPathForValue = (
    xml: string,
    hoveredNode: HoverValuePayload,
  ): {
    matches: HoverXPathMatch[];
    message: string;
  } => {
    const value = hoveredNode.value.trim();
    if (!value) {
      return {
        matches: [],
        message: 'Hover an XML value to see its XPath.',
      };
    }

    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, 'application/xml');
      if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        return {
          matches: [],
          message: 'XPath hint unavailable (invalid XML).',
        };
      }

      const matches: HoverXPathMatch[] = [];
      const elements = Array.from(xmlDoc.getElementsByTagName('*'));

      for (const element of elements) {
        const elementPath = getElementXPath(element);

        if (hoveredNode.nodeKind === 'attribute') {
          for (const attribute of Array.from(element.attributes)) {
            if (attribute.value === value) {
              const exactNodePath = `${elementPath}/@${attribute.name}`;
              matches.push({
                occurrence: matches.length + 1,
                elementPath,
                exactNodePath,
              });
            }
          }
        } else {
          for (const childNode of Array.from(element.childNodes)) {
            if (
              childNode.nodeType === Node.TEXT_NODE &&
              childNode.textContent?.trim() === value
            ) {
              const exactNodePath = `${elementPath}/text()`;
              matches.push({
                occurrence: matches.length + 1,
                elementPath,
                exactNodePath,
              });
            }
          }
        }
      }

      if (matches.length === 0) {
        return {
          matches: [],
          message: `No XPath match found for "${value}".`,
        };
      }

      const selectedIndex = Math.min(
        Math.max(hoveredNode.occurrenceIndex, 0),
        matches.length - 1,
      );
      const selectedMatch = matches[selectedIndex];

      return {
        matches: [selectedMatch],
        message: `Showing selected node match for "${value}" (${matches.length} total matches).`,
      };
    } catch (_error) {
      return {
        matches: [],
        message: 'XPath hint unavailable.',
      };
    }
  };

  // Apply XPath query
  const parseAttributeMappings = (
    mappingsJson: string,
  ): AttributeMappings | null => {
    try {
      const parsed = JSON.parse(mappingsJson) as unknown;

      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        setQueryParseError(
          'Attribute mappings must be a JSON object (for example: {"id":"./id"}).',
        );
        setIsAttributeMappingsParseError(true);
        return null;
      }

      const mappings: AttributeMappings = {};
      for (const [attributeId, expression] of Object.entries(parsed)) {
        if (typeof expression !== 'string') {
          setQueryParseError(
            `Attribute mapping '${attributeId}' must be an XPath string value.`,
          );
          setIsAttributeMappingsParseError(true);
          return null;
        }
        mappings[attributeId] = expression;
      }

      if (Object.keys(mappings).length === 0) {
        setQueryParseError('Add at least one attribute mapping XPath pair.');
        setIsAttributeMappingsParseError(true);
        return null;
      }

      return mappings;
    } catch (_error) {
      setQueryParseError(
        'Attribute mappings must be valid JSON (for example: {"id":"./id"}).',
      );
      setIsAttributeMappingsParseError(true);
      return null;
    }
  };

  // Apply XPath query
  const applyXPathQuery = (
    xml: string,
    root: string,
    attributeMappingsJson: string,
  ) => {
    const attributeMappings = parseAttributeMappings(attributeMappingsJson);
    if (!attributeMappings) {
      setResult('[]');
      return;
    }

    try {
      let result: any;

      switch (implementation) {
        case 'XPath':
          // Evaluated entirely in the browser; no Lambda round trip.
          result = evaluateXPathMappings(attributeMappings, root, xml);
          break;
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
      setIsAttributeMappingsParseError(false);
      setXmlParseError(false);
    } catch (error: any) {
      setResult('No match');
      // Only flag the XML input terminal when the XML itself failed to
      // parse; query/root-path syntax errors surface via the alert only.
      setXmlParseError(
        error instanceof XPathEvaluationError && error.kind === 'xml-parse',
      );
      setQueryParseError(error.message || 'Error executing XPath query');
    }
  };

  // Handle input change
  const handleXmlChange = (newxml: string) => {
    setLocalXml(newxml);
    setHoverXPathHintMessage('Hover over an XML value to see its XPath.');
    setHoverXPathMatches([]);
    setIsHoverLocked(false);
    setLockedHoverValue(null);
    if (hoverClearTimeoutRef.current !== null) {
      window.clearTimeout(hoverClearTimeoutRef.current);
      hoverClearTimeoutRef.current = null;
    }
    lastRenderedHoverKeyRef.current = '';
  };

  const handleXmlHoverValueChange = (hoveredNode: HoverValuePayload | null) => {
    if (isHoverLocked) {
      return;
    }
    if (hoverClearTimeoutRef.current !== null) {
      window.clearTimeout(hoverClearTimeoutRef.current);
      hoverClearTimeoutRef.current = null;
    }
    if (!hoveredNode) {
      // Prevent visual jitter when the cursor briefly crosses XML punctuation.
      hoverClearTimeoutRef.current = window.setTimeout(() => {
        setHoverXPathHintMessage('Hover over an XML value to see its XPath.');
        setHoverXPathMatches([]);
        lastRenderedHoverKeyRef.current = '';
        hoverClearTimeoutRef.current = null;
      }, 120);
      return;
    }
    const hoverKey = `${hoveredNode.nodeKind}:${hoveredNode.value}:${hoveredNode.occurrenceIndex}`;
    if (lastRenderedHoverKeyRef.current === hoverKey) {
      return;
    }
    const hoverData = resolveXPathForValue(localXml, hoveredNode);
    setHoverXPathHintMessage(hoverData.message);
    setHoverXPathMatches(hoverData.matches);
    lastRenderedHoverKeyRef.current = hoverKey;
  };

  const handleXmlHoverLock = (hoveredNode: HoverValuePayload | null) => {
    if (!hoveredNode) {
      return;
    }
    if (hoverClearTimeoutRef.current !== null) {
      window.clearTimeout(hoverClearTimeoutRef.current);
      hoverClearTimeoutRef.current = null;
    }
    const hoverData = resolveXPathForValue(localXml, hoveredNode);
    setHoverXPathHintMessage(`LOCKED: ${hoverData.message}`);
    setHoverXPathMatches(hoverData.matches);
    setIsHoverLocked(true);
    setLockedHoverValue(hoveredNode);
  };

  const resetHoverLock = () => {
    setIsHoverLocked(false);
    setHoverXPathHintMessage('Hover an XML value to see its XPath.');
    setHoverXPathMatches([]);
    setLockedHoverValue(null);
    lastRenderedHoverKeyRef.current = '';
  };

  useEffect(() => {
    return () => {
      if (hoverClearTimeoutRef.current !== null) {
        window.clearTimeout(hoverClearTimeoutRef.current);
      }
    };
  }, []);

  // Handle root input change
  const handleRootChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoot(event.target.value);
  };

  // Run button handler
  const handleRunQuery = () => {
    applyXPathQuery(localXml, root, attributeMappingsInput);
  };

  return (
    <Layout
      title="XPath Evaluator"
      description="The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.">
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
              hasParseError={xmlParseError}
              title="XML input"
              onHoverValueChange={handleXmlHoverValueChange}
              onHoverLock={handleXmlHoverLock}
              lockedHoverValue={lockedHoverValue}
            />
            <InputTerminal
              fontSize={fontSize}
              value={attributeMappingsInput}
              onChange={setAttributeMappingsInput}
              hasParseError={isAttributeMappingsParseError}
              mode="json"
              title="Attribute mappings"
            />
            <ResultTerminal result={result} fontSize={fontSize} />
          </Stack>
          <div
            className={`${styles.hoverHint} ${
              isHoverLocked ? styles.hoverHintLocked : ''
            }`}>
            <div className={styles.hoverHeader}>
              <strong>{isHoverLocked ? 'XPath Hover (Locked)' : 'XPath Hover'}</strong>
              <button
                type="button"
                onClick={resetHoverLock}
                disabled={!isHoverLocked}
                className={`${styles.resetHoverButton} ${
                  isHoverLocked
                    ? styles.resetHoverButtonActive
                    : styles.resetHoverButtonDisabled
                }`}>
                Reset Hover
              </button>
            </div>
            <div>Click a selected XML value to lock output to that variable.</div>
            <div>{hoverXPathHintMessage}</div>
            <div className={styles.hoverResultsSectionTitle}>
              Exact selected node XPath
            </div>
            {hoverXPathMatches.map((match, index) => (
              <div
                key={`selected-${index}-${match.occurrence}-${match.exactNodePath}`}
                className={styles.hoverHintMatch}>
                <div>
                  Element path: <code>{match.elementPath}</code>
                </div>
                <div>
                  Exact node path: <code>{match.exactNodePath}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default XPathEvaluator;
