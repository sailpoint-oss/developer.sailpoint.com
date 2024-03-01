import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faLink, faBook, faArrowUpRightFromSquare } from '@fortawesome/pro-duotone-svg-icons'
import { useColorMode } from '@docusaurus/theme-common';

function CardContainer({href, children}) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}
function CardLayout({href, icon, title, description}) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon}{title}
      </h2>
      {description && (
        <p
          className={styles.cardDescription}//{clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}
function CardCategory({item}) {
  const href = findFirstCategoryLink(item);
  const {colorMode} = useColorMode();
  //const icon = colorMode === 'dark' ? <FontAwesomeIcon icon={faFolderOpen} style={{marginRight: "0.5em"}} color='#0033a1' /> : <FontAwesomeIcon icon={faFolderOpen} style={{marginRight: "0.5em"}} color='#7ecfee' />;
  //const icon = <FontAwesomeIcon icon={faFolderOpen} style={{marginRight: "0.5em"}} color='#0033a1' />;
  //console.log(item)
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon={<FontAwesomeIcon icon={faFolderOpen} style={{marginRight: "0.5em"}} color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'} />}
      //icon={icon}
      title={item.label}
      description={
        item.customProps?.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          {count: item.items.length},
        )
      }
    />
  );
}
function CardLink({item}) {
  const {colorMode} = useColorMode();
  const icon = isInternalUrl(item.href) ? <FontAwesomeIcon icon={faBook} style={{marginRight: "0.5em"}} color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'} /> : <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{marginRight: "0.5em"}} color={colorMode === 'dark' ? '#7ecfee' : '#0033a1'} />;
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}
export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
