import {ActionIcon, Textarea} from '@mantine/core';
import {IconSend} from '@tabler/icons-react';
import React, {useEffect, useRef, useState} from 'react';
import {v4} from 'uuid';
import ResponseCard from '../ResponseCard';

export default function Content() {
  const [apiResponse, setApiResponse] = useState([]);
  const textBoxRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const uniqueID = v4();

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 400);

  const submitQuery = async (e) => {
    if (
      (e.keyCode === 13 &&
        e.shiftKey === false &&
        textBoxRef.current.value.trim() !== '') ||
      e.type === 'click'
    ) {
      setLoading(true);
      e.preventDefault();
      const currentQuery = textBoxRef.current.value;
      textBoxRef.current.value = '';
      console.log({uniqueID});
      const resp = await fetch(
        'https://sailpoint-ai-a67a0914ff13.herokuapp.com/chatbot',
        {
          method: 'POST',
          body: JSON.stringify({
            query: currentQuery,
            token: uniqueID,
          }),
        },
      );

      console.debug(resp);
      const json = await resp.json();
      console.debug(json);
      if (json.chat_history.length > 0 && resp.status === 200) {
        setApiResponse(
          json.chat_history.map((item) => ({
            question: item[0],
            answer: item[1],
          })),
        );
      }
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        height: '100%',
        padding: '10px',
        gap: '5px',
      }}>
      <div
        style={{
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          minHeight: '65vh',
          flexDirection: 'column',
          gap: '5px',
        }}>
        {apiResponse.length > 0 &&
          apiResponse.map((item, index) => (
            <ResponseCard Item={item} key={index} />
          ))}
      </div>

      <div
        style={{
          position: 'relative',
        }}>
        <Textarea
          style={{fontFamily: 'poppins', flexGrow: 1}}
          ref={textBoxRef}
          variant="filled"
          onKeyDown={submitQuery}
          placeholder="Input your query..."
          autosize
          disabled={loading}
          minRows={1}
          maxRows={windowSize.innerWidth > 500 ? 30 : 8}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '5px',
            right: '5px',
          }}>
          <ActionIcon
            onClick={submitQuery}
            color="blue"
            size="lg"
            variant="filled"
            loading={loading}>
            <IconSend size="1rem" />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
