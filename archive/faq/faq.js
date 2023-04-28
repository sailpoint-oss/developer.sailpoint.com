import React, {useEffect} from 'react';
import styles from './styles.module.css';
import {getFAQ} from '../../services/StreamService';
import Accordion from '../Accordion/Accordion';
export default function FAQContent() {
  const [faqs, setFaqs] = React.useState([]);

  React.useEffect(async () => {
    let data = await getFAQ();
    if (!Array.isArray(data)) data = [];
    setFaqs(data);
  }, []);

  let itemsList = faqs?.map((item, index) => {
    return (
      <Accordion
        key={item?.question}
        title={item?.question}
        content={item?.answer}
      />
    );
  });

  return <div className="p-4 gap-2 flex flex-col">{itemsList}</div>;
}
