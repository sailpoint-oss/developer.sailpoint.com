import React, {useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import type {ListingItem} from './ListingPage';
import landing from './landing.module.css';

/**
 * The search field of the landing pages. It filters by text and by tags:
 *   - While the reader types, a list under the field shows the tags that
 *     match the text. Picking one adds it as a chip in the field.
 *   - Each chip has an x that removes it. Backspace in an empty field removes
 *     the last chip.
 *   - The popular tags beside the field add a chip with one click.
 *
 * Several tags narrow the results: an item must have every selected tag.
 */

const MAX_SUGGESTIONS = 8;
/** A landing page has one search field. */
const LIST_ID = 'listing-tag-suggestions';

/** Lowercase letters and digits only, so "access req" finds "access-requests". */
const squash = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

/** Wraps the parts of `text` that match the typed words in <mark>. */
function Match({text, query}: {text: string; query: string}) {
  const words = query.trim().split(/[\s-]+/).filter(Boolean);
  if (words.length === 0) return <>{text}</>;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = text.split(new RegExp(`(${escaped.join('|')})`, 'gi'));
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part))}
    </>
  );
}

export default function TagSearch({
  items,
  hiddenTags,
  popular,
  query,
  onQueryChange,
  selected,
  onSelectedChange,
  noun,
}: {
  items: ListingItem[];
  /** Tags on every item. They do not help to filter. */
  hiddenTags: Set<string>;
  /** The most used tags, for the quick filters. */
  popular: string[];
  query: string;
  onQueryChange: (query: string) => void;
  selected: string[];
  onSelectedChange: (tags: string[]) => void;
  /** For example "posts". */
  noun: string;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  // The tags that match the text, with the number of items each one would
  // leave, given the tags that are already selected.
  const suggestions = useMemo(() => {
    const words = query.trim().split(/\s+/).map(squash).filter(Boolean);
    if (words.length === 0) return [];
    const whole = squash(query);
    const counts = new Map<string, number>();
    for (const item of items) {
      if (!selected.every((tag) => item.tags.includes(tag))) continue;
      for (const tag of item.tags) {
        if (hiddenTags.has(tag) || selected.includes(tag)) continue;
        const name = squash(tag);
        if (words.every((word) => name.includes(word))) counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    // Tags that start with the text first, then the most used.
    return [...counts]
      .sort(
        (a, b) =>
          Number(squash(b[0]).startsWith(whole)) - Number(squash(a[0]).startsWith(whole)) ||
          b[1] - a[1] ||
          a[0].localeCompare(b[0]),
      )
      .slice(0, MAX_SUGGESTIONS);
  }, [items, hiddenTags, selected, query]);

  const showList = open && suggestions.length > 0;

  const addTag = (tag: string) => {
    onSelectedChange([...selected, tag]);
    // The text found the tag. The tag filter replaces it.
    onQueryChange('');
    setActive(0);
    inputRef.current?.focus();
  };
  const removeTag = (tag: string) => {
    onSelectedChange(selected.filter((t) => t !== tag));
    inputRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && suggestions.length) {
      e.preventDefault();
      setOpen(true);
      setActive((i) => (showList ? (i + 1) % suggestions.length : 0));
    } else if (e.key === 'ArrowUp' && showList) {
      e.preventDefault();
      setActive((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && showList) {
      e.preventDefault();
      addTag(suggestions[active][0]);
    } else if (e.key === 'Escape') {
      if (showList) setOpen(false);
      else onQueryChange('');
    } else if (e.key === 'Backspace' && !query && selected.length) {
      onSelectedChange(selected.slice(0, -1));
    }
  };

  const quick = popular.filter((tag) => !selected.includes(tag));

  return (
    <div className={landing.toolbar}>
      <div className={landing.searchWrap}>
        {/* A click on the empty part of the field focuses the input. */}
        <div
          className={landing.search}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              e.preventDefault();
              inputRef.current?.focus();
            }
          }}>
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          {selected.map((tag) => (
            <span key={tag} className={landing.chip}>
              {tag}
              <button
                type="button"
                className={landing.chipRemove}
                onClick={() => removeTag(tag)}
                aria-label={`Remove the ${tag} tag filter`}>
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={showList}
            aria-controls={LIST_ID}
            aria-autocomplete="list"
            aria-activedescendant={showList ? `${LIST_ID}-${active}` : undefined}
            aria-label={`Search ${noun} or find a tag`}
            placeholder={selected.length ? 'Add more…' : `Search ${noun} or tags`}
            value={query}
            onChange={(e) => {
              onQueryChange(e.target.value);
              setOpen(true);
              setActive(0);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onKeyDown={onKeyDown}
          />
          {(query || selected.length > 0) && (
            <button
              type="button"
              className={landing.searchClear}
              onClick={() => {
                onQueryChange('');
                onSelectedChange([]);
                inputRef.current?.focus();
              }}
              aria-label="Clear the search and tags">
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          )}
        </div>

        {showList && (
          <div className={landing.suggest}>
            <p className={landing.suggestTitle}>Filter by tag</p>
            <ul id={LIST_ID} role="listbox" aria-label="Matching tags">
              {suggestions.map(([tag, count], i) => (
                <li
                  key={tag}
                  id={`${LIST_ID}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  className={clsx(landing.suggestItem, i === active && landing.suggestActive)}
                  // mousedown, not click: the input keeps the focus.
                  onMouseDown={(e) => {
                    e.preventDefault();
                    addTag(tag);
                  }}
                  onMouseEnter={() => setActive(i)}>
                  <i className="fa-solid fa-tag" aria-hidden="true" />
                  <span className={landing.suggestName}>
                    <Match text={tag} query={query} />
                  </span>
                  <span className={landing.suggestCount}>{count}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {quick.length > 0 && (
        <div className={landing.filters} role="group" aria-label="Popular tags">
          <span className={landing.filtersLabel}>Popular</span>
          {quick.map((tag) => (
            <button key={tag} type="button" className={landing.filter} onClick={() => addTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
