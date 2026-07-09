import React, {useEffect, useRef} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-json';
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
  hasParseError?: boolean;
  mode?: 'xml' | 'json' | 'text';
  title?: string;
  onHoverValueChange?: (value: HoverValuePayload | null) => void;
  onHoverLock?: (value: HoverValuePayload | null) => void;
  lockedHoverValue?: HoverValuePayload | null;
}
export type HoverValuePayload = {
  value: string;
  nodeKind: 'attribute' | 'text';
  occurrenceIndex: number;
  row: number;
  startCol: number;
  endCol: number;
};

const InputTerminal: React.FC<InputTerminalProps> = ({
  fontSize,
  value,
  onChange,
  hasParseError = false,
  mode = 'xml',
  title = 'Inputs',
  onHoverValueChange,
  onHoverLock,
  lockedHoverValue = null,
}) => {
  const { colorMode } = useColorMode();
  const editorRef = useRef<any>(null);
  const lastHoveredPayloadRef = useRef<HoverValuePayload | null>(null);
  const lastNotifiedPayloadRef = useRef<HoverValuePayload | null>(null);
  const lockedMarkerIdRef = useRef<number | null>(null);

  const terminalClass = hasParseError
    ? styles.inputTerminalContainer
    : styles.terminalContainerDefault;

  useEffect(() => {
    if (mode !== 'xml' || !onHoverValueChange || !editorRef.current) {
      return;
    }

    const editor = editorRef.current.editor;
    if (!editor) {
      return;
    }

    const escapeForRegex = (text: string): string =>
      text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const countAttributeOccurrencesUntil = (
      fullText: string,
      targetValue: string,
      absoluteStart: number,
    ): number => {
      const escapedValue = escapeForRegex(targetValue);
      const pattern = new RegExp(`=\\s*(['"])${escapedValue}\\1`, 'g');
      let count = 0;
      let match: RegExpExecArray | null;
      while ((match = pattern.exec(fullText)) !== null) {
        const quoteOffset = match[0].search(/['"]/);
        const valueStart = match.index + quoteOffset + 1;
        if (valueStart > absoluteStart) {
          break;
        }
        count += 1;
      }
      return Math.max(0, count - 1);
    };

    const countTextOccurrencesUntil = (
      fullText: string,
      targetValue: string,
      absoluteStart: number,
    ): number => {
      const pattern = />([^<]*)</g;
      let count = 0;
      let match: RegExpExecArray | null;
      while ((match = pattern.exec(fullText)) !== null) {
        const rawText = match[1];
        const trimmedText = rawText.trim();
        if (!trimmedText || trimmedText !== targetValue) {
          continue;
        }
        const trimmedStartInMatch = rawText.indexOf(trimmedText);
        const valueStart = match.index + 1 + trimmedStartInMatch;
        if (valueStart > absoluteStart) {
          break;
        }
        count += 1;
      }
      return Math.max(0, count - 1);
    };

    const extractHoveredValue = (
      line: string,
      column: number,
    ): {value: string; nodeKind: 'attribute' | 'text'; startCol: number} | null => {
      if (!line) {
        return null;
      }

      const quoteChars = [`"`, `'`];
      for (const quote of quoteChars) {
        const leftQuote = line.lastIndexOf(quote, column);
        if (leftQuote >= 0) {
          const rightQuote = line.indexOf(quote, leftQuote + 1);
          if (rightQuote > leftQuote && column <= rightQuote) {
            const quotedValue = line.slice(leftQuote + 1, rightQuote).trim();
            if (!quotedValue) {
              return null;
            }
            return {
              value: quotedValue,
              nodeKind: 'attribute',
              startCol: leftQuote + 1,
            };
          }
        }
      }

      const leftTag = line.lastIndexOf('>', column);
      const rightTag = line.indexOf('<', column);
      if (leftTag >= 0 && rightTag > leftTag) {
        const textValue = line.slice(leftTag + 1, rightTag).trim();
        if (!textValue) {
          return null;
        }
        const originalSegment = line.slice(leftTag + 1, rightTag);
        const trimmedOffset = originalSegment.indexOf(textValue);
        return {
          value: textValue,
          nodeKind: 'text',
          startCol: leftTag + 1 + Math.max(0, trimmedOffset),
        };
      }

      return null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const position = editor.renderer.screenToTextCoordinates(
        event.clientX,
        event.clientY,
      );
      const line = editor.session.getLine(position.row);
      const hoveredToken = extractHoveredValue(line, position.column);
      if (!hoveredToken) {
        lastHoveredPayloadRef.current = null;
        if (lastNotifiedPayloadRef.current !== null) {
          onHoverValueChange(null);
          lastNotifiedPayloadRef.current = null;
        }
        return;
      }
      const absoluteStart = editor.session.doc.positionToIndex({
        row: position.row,
        column: hoveredToken.startCol,
      });
      const occurrenceIndex =
        hoveredToken.nodeKind === 'attribute'
          ? countAttributeOccurrencesUntil(value, hoveredToken.value, absoluteStart)
          : countTextOccurrencesUntil(value, hoveredToken.value, absoluteStart);
      const payload: HoverValuePayload = {
        value: hoveredToken.value,
        nodeKind: hoveredToken.nodeKind,
        occurrenceIndex,
        row: position.row,
        startCol: hoveredToken.startCol,
        endCol: hoveredToken.startCol + hoveredToken.value.length,
      };
      lastHoveredPayloadRef.current = payload;
      const lastNotified = lastNotifiedPayloadRef.current;
      if (
        lastNotified &&
        lastNotified.value === payload.value &&
        lastNotified.nodeKind === payload.nodeKind &&
        lastNotified.occurrenceIndex === payload.occurrenceIndex
      ) {
        return;
      }
      onHoverValueChange(payload);
      lastNotifiedPayloadRef.current = payload;
    };

    const handleMouseLeave = () => {
      lastHoveredPayloadRef.current = null;
      if (lastNotifiedPayloadRef.current !== null) {
        onHoverValueChange(null);
        lastNotifiedPayloadRef.current = null;
      }
    };

    const handleMouseUp = () => {
      if (!onHoverLock) {
        return;
      }
      onHoverLock(lastHoveredPayloadRef.current);
    };

    editor.container.addEventListener('mousemove', handleMouseMove);
    editor.container.addEventListener('mouseleave', handleMouseLeave);
    editor.container.addEventListener('mouseup', handleMouseUp);

    return () => {
      editor.container.removeEventListener('mousemove', handleMouseMove);
      editor.container.removeEventListener('mouseleave', handleMouseLeave);
      editor.container.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mode, onHoverLock, onHoverValueChange, value]);

  useEffect(() => {
    if (mode !== 'xml' || !editorRef.current) {
      return;
    }

    const editor = editorRef.current.editor;
    if (!editor) {
      return;
    }

    if (lockedMarkerIdRef.current !== null) {
      editor.session.removeMarker(lockedMarkerIdRef.current);
      lockedMarkerIdRef.current = null;
    }

    if (!lockedHoverValue) {
      return;
    }

    const Range = ace.require('ace/range').Range;
    lockedMarkerIdRef.current = editor.session.addMarker(
      new Range(
        lockedHoverValue.row,
        lockedHoverValue.startCol,
        lockedHoverValue.row,
        lockedHoverValue.endCol,
      ),
      'locked-hover-selection',
      'text',
      false,
    );

    return () => {
      if (lockedMarkerIdRef.current !== null) {
        editor.session.removeMarker(lockedMarkerIdRef.current);
        lockedMarkerIdRef.current = null;
      }
    };
  }, [lockedHoverValue, mode]);

  return (
    <div className="col">
      <h2>{title}</h2>
      <AceEditor
        onLoad={(editor) => {
          editorRef.current = {editor};
        }}
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
