/**
 * Custom navbar item type: `custom-megaDropdown`.
 *
 * Renders a top-level navbar dropdown as a wide, multi-column "mega menu"
 * panel (inspired by https://github.com/PaloAltoNetworks/pan.dev) while keeping
 * our existing top-level sections. Instead of the default flat `items` list,
 * a mega dropdown takes a `groups` array where each group is a column:
 *
 *   {
 *     type: 'custom-megaDropdown',
 *     label: 'Tools',
 *     position: 'left',
 *     groups: [
 *       { label: 'SDKs & CLI', items: [{ label, to }, ...] },
 *       { label: 'Utilities',  items: [{ label, to }, ...] },
 *     ],
 *   }
 *
 * A group with no `label` renders as a clean single column with no heading.
 * Each item is a standard navbar link config (`to`, `href`, `label`, etc.) and
 * is passed straight through to NavbarNavLink, so internal + external links,
 * active states and prefetching all behave exactly like normal dropdown links.
 */
import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {
  useCollapsible,
  Collapsible,
  isRegexpStringMatch,
} from '@docusaurus/theme-common';
import {isSamePath, useLocalPathname} from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import styles from './styles.module.css';

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}

function containsActiveItems(groups, localPathname) {
  return groups.some((group) =>
    (group.items ?? []).some((item) => isItemActive(item, localPathname)),
  );
}

function MegaDropdownItemDesktop({groups = [], position, className, ...props}) {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Close the panel when clicking/tapping outside of it. Hover open/close is
  // handled by Infima's `dropdown--hoverable` CSS; this covers keyboard/touch.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}
    >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown((show) => !show);
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <div className={clsx('dropdown__menu', styles.megaPanel)}>
        <div className={styles.megaPanelInner}>
          {groups.map((group, groupIdx) => (
            <div className={styles.megaColumn} key={groupIdx}>
              {group.label && (
                <div className={styles.megaColumnTitle}>{group.label}</div>
              )}
              <ul className={styles.megaColumnList}>
                {(group.items ?? []).map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <NavbarNavLink
                      className="dropdown__link"
                      activeClassName="dropdown__link--active"
                      {...item}
                      onClick={() => setShowDropdown(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaDropdownItemMobile({
  groups = [],
  className,
  position, // destructured so it isn't spread onto the link
  onClick,
  ...props
}) {
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(groups, localPathname);
  const {collapsed, toggleCollapsed, setCollapsed} = useCollapsible({
    initialState: () => !containsActive,
  });
  // Expand the section if it becomes active after a navigation.
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);

  return (
    <li className={clsx('menu__list-item', {'menu__list-item--collapsed': collapsed})}>
      <NavbarNavLink
        role="button"
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret',
          className,
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          toggleCollapsed();
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {groups.map((group, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {group.label && (
              <li className={styles.mobileGroupTitle}>{group.label}</li>
            )}
            {(group.items ?? []).map((item, itemIdx) => (
              <li className="menu__list-item" key={itemIdx}>
                <NavbarNavLink
                  className="menu__link"
                  activeClassName="menu__link--active"
                  {...item}
                  onClick={onClick}
                />
              </li>
            ))}
          </React.Fragment>
        ))}
      </Collapsible>
    </li>
  );
}

export default function MegaDropdownNavbarItem({mobile = false, ...props}) {
  const Comp = mobile ? MegaDropdownItemMobile : MegaDropdownItemDesktop;
  return <Comp {...props} />;
}
