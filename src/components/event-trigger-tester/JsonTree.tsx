import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {formatPath} from './jsonPath';
import type {PathSegment} from './jsonPath';
import styles from './styles.module.css';

/** Containers deeper than this start collapsed. */
const AUTO_COLLAPSE_DEPTH = 4;

interface Props {
  value: unknown;
  /** Paths (as formatted text) that are already watched. */
  watched: ReadonlySet<string>;
  onWatch: (path: string) => void;
}

/**
 * A JSON document as an expandable tree. Every leaf has a "watch" button that
 * sends the leaf's path, which is how a user picks a field to chart.
 */
export default function JsonTree({value, watched, onWatch}: Props) {
  /** Expand state the user chose, by path. Unset paths use the depth rule. */
  const [overrides, setOverrides] = useState<Map<string, boolean>>(new Map());

  const isCollapsed = (path: string, depth: number) =>
    overrides.get(path) ?? depth >= AUTO_COLLAPSE_DEPTH;

  const toggle = (path: string, depth: number) => {
    const collapsed = isCollapsed(path, depth);
    setOverrides((map) => new Map(map).set(path, !collapsed));
  };

  const renderNode = (
    node: unknown,
    path: PathSegment[],
    label: string | null,
    depth: number,
  ): React.ReactNode => {
    const p = formatPath(path);
    const keyPart =
      label !== null ? (
        <>
          <span className={styles.treeKey}>{label}</span>
          <span className={styles.treePunct}>:&nbsp;</span>
        </>
      ) : null;

    if (typeof node === 'object' && node !== null) {
      const isArray = Array.isArray(node);
      const collapsed = isCollapsed(p, depth);
      const entries: [string, unknown, PathSegment][] = isArray
        ? (node as unknown[]).map((item, index) => [String(index), item, index])
        : Object.entries(node as Record<string, unknown>).map(([k, v]) => [
            k,
            v,
            k,
          ]);
      const count = entries.length;
      const noun = isArray ? 'item' : 'field';
      return (
        <div key={p || 'root'}>
          <div className={styles.treeRow}>
            <button
              type="button"
              className={styles.treeToggle}
              aria-expanded={!collapsed}
              aria-label={`${collapsed ? 'Expand' : 'Collapse'} ${p || 'root'}`}
              onClick={() => toggle(p, depth)}>
              <FontAwesomeIcon
                icon={collapsed ? faChevronRight : faChevronDown}
              />
            </button>
            {keyPart}
            <span className={styles.treePunct}>{isArray ? '[' : '{'}</span>
            {collapsed && (
              <>
                <span className={styles.treeSummary}>
                  &nbsp;{count} {noun}
                  {count === 1 ? '' : 's'}&nbsp;
                </span>
                <span className={styles.treePunct}>{isArray ? ']' : '}'}</span>
              </>
            )}
          </div>
          {!collapsed && (
            <>
              <div className={styles.treeChildren}>
                {entries.map(([childLabel, childValue, segment]) =>
                  renderNode(
                    childValue,
                    [...path, segment],
                    childLabel,
                    depth + 1,
                  ),
                )}
              </div>
              <div className={styles.treeRow}>
                <span className={styles.treeSpacer} />
                <span className={styles.treePunct}>{isArray ? ']' : '}'}</span>
              </div>
            </>
          )}
        </div>
      );
    }

    const isWatched = watched.has(p);
    const kind = node === null ? 'null' : typeof node;
    return (
      <div
        key={p}
        className={`${styles.treeRow} ${styles.treeLeaf} ${
          isWatched ? styles.treeWatched : ''
        }`}>
        <span className={styles.treeSpacer} />
        {keyPart}
        <span className={`${styles.treeValue} ${styles[`tv_${kind}`] ?? ''}`}>
          {JSON.stringify(node)}
        </span>
        {p && (
          <button
            type="button"
            className={styles.treeWatch}
            aria-label={isWatched ? `Open the chart for ${p}` : `Watch ${p}`}
            title={
              isWatched
                ? 'Watched. Click to open its chart.'
                : `Watch ${p} over time`
            }
            onClick={() => onWatch(p)}>
            <FontAwesomeIcon icon={faChartLine} />
          </button>
        )}
      </div>
    );
  };

  return <div className={styles.tree}>{renderNode(value, [], null, 0)}</div>;
}
