import React, {useEffect, useState} from 'react';
import Styles from './styles.module.css';

export default function Accordion({
  title = 'Example Title',
  content = 'Example Content',
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setOpen(!open)}
          className={`flex flex-col ${Styles.accordion} text-white overflow-hidden rounded-2xl`}>
          <div className="flex flex-row justify-between p-4 w-full">
            <p className="!my-0 text-start">{title}</p>
            <div className="flex flex-col">
              <p
                className={`!my-0 transition ${
                  open === true ? 'rotate-45' : 'rotate-0'
                }`}>
                +
              </p>
            </div>
          </div>
          <div className="rounded w-full" aria-expanded={!open}>
            {open === true ? (
              <p className="!my-0 p-4 bg-slate-900/50 text-start">{content}</p>
            ) : null}
          </div>
        </button>
      </div>
    </>
  );
}
