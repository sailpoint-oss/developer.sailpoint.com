import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Modal from 'react-modal';
import {addDarkToFileName} from '../../../util/util';
import ThemedImage from '@theme/ThemedImage';
import {getFAQ} from '../../../services/StreamService';
export default function FAQ({title, image, description}) {
  const [faqModalIsOpen, setFaqIsOpen] = React.useState(false);
  const [faqs, setFaqs] = React.useState([]);

  function openFaqModal() {
    setFaqIsOpen(true);
  }

  function closeFaqModal() {
    setFaqIsOpen(false);
  }

  const getFaqs = async () => {
    const data = await getFAQ();
    if (!Array.isArray(data)) data = [];
    setFaqs(data);
  };
  React.useEffect(() => {
    getFaqs();
  }, []);

  let itemsList = faqs?.map((item, index) => {
    return (
      <div key={`${index}-qa`}>
        <div className={styles.faqQuestion} key={`${index}-question`}>
          {item?.question}
        </div>
        <div className="px-8 pb-4" key={`${index}-answer`}>
          {item?.answer}
        </div>
      </div>
    );
  });

  return (
    <div>
      <button
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded"
        onClick={openFaqModal}>
        FAQ
      </button>
      <Modal
        isOpen={faqModalIsOpen}
        onRequestClose={closeFaqModal}
        className={styles.modal}
        contentLabel="FAQ">
        <div className={styles.gettingStartedText}>
          <ThemedImage
            className={styles.gettingStartedCardIcon}
            sources={{
              light: useBaseUrl(image),
              dark: useBaseUrl(addDarkToFileName(image)),
            }}></ThemedImage>
          <div className={styles.gettingStartedOne}>{title}</div>
          <div
            className={styles.gettingStartedThree}
            dangerouslySetInnerHTML={{__html: description}}></div>
        </div>

        <div className="md:h-[50vh] w-full h-[40vh] overflow-auto p-4 gap-2 flex flex-col">
          {itemsList}
        </div>
        <div className="flex flex-row justify-end">
          <button className={styles.modalButton} onClick={closeFaqModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
