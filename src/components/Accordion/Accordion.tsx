import React, { useState } from 'react';
import Styles from './styles.module.css';

// Define props interface
interface AccordionProps {
  title?: string;
  content?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title = 'Example Title',
  content = 'Example Content',
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col ${Styles.accordion} text-white overflow-hidden rounded-2xl border-none p-0`}
      >
        <div className="flex flex-row justify-between p-4 w-full">
          <p className="!my-0 text-start">{title}</p>
          <div className="flex flex-col">
            <p className={`!my-0 transition ${open ? 'rotate-45' : 'rotate-0'}`}>
              +
            </p>
          </div>
        </div>
        <div className="rounded w-full" aria-expanded={!open}>
          {open && (
            <p className="!my-0 p-4 bg-slate-900/50 text-start">{content}</p>
          )}
        </div>
      </button>
    </div>
  );
};

export default Accordion;
