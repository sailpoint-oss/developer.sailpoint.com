import React, {useEffect} from 'react';
import {PopupButton} from '@typeform/embed-react';
import styles from './styles.module.css';
import Modal from 'react-modal';
import {useRef} from 'react';

export default function Survey({id, stage, socket}) {
  const typeformRef = useRef(null);

  useEffect(() => {
    if (socket) {
      socket.on('survey', (data) => {
        if (stage.stage === data) {
          typeformRef.current.children[1].click();
        }
      });
      return () => {
        socket.off('survey');
      };
    }
  }, [stage]);

  return (
    <div ref={typeformRef}>
      <PopupButton
        width={30}
        id={id}
        className="cursor-pointer border-[color:var(--ifm-color-primary)] md:grow border-2 hover:bg-[color:var(--ifm-color-primary)] hover:text-white text-[color:var(--ifm-color-primary)] text-center font-bold py-2 px-4 rounded">
        Survey
      </PopupButton>
    </div>
  );
}
