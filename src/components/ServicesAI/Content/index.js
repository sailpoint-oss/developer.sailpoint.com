import {ActionIcon, Textarea} from '@mantine/core';
import {IconSend, IconX} from '@tabler/icons-react';
import React, {useRef, useState} from 'react';
import ResponseCard from '../ResponseCard';
import {v4} from 'uuid';

export default function Content() {
  const [inputText, setInputText] = useState('');
  const [textareaheight, setTextAreaHeight] = useState(1);
  const [apiResponse, setApiResponse] = useState([]);
  const textBoxRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const uniqueID = v4();

  setTimeout(() => {
    setLoading(false);
  }, 400);

  const reset = async () => {
    setApiResponse([]);
  };

  const submitQuery = async (e) => {
    if (e.keyCode === 13 || e.type === 'click') {
      console.log({uniqueID});
      const resp = await fetch(
        'https://sailpoint-ai-a67a0914ff13.herokuapp.com/chatbot',
        {
          method: 'POST',
          body: JSON.stringify({
            query: textBoxRef.current.value,
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
    }
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '5px',
      }}>
      <div
        style={{
          overflow: 'auto',
          height: '65vh',
          display: 'flex',
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
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
        }}>
        <Textarea
          style={{fontFamily: 'poppins', flexGrow: 1}}
          ref={textBoxRef}
          variant="filled"
          label="Prompt"
          placeholder="Input a query..."
          autosize
          minRows={2}
          maxRows={30}
        />
        <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
          <ActionIcon
            onClick={reset}
            color="blue"
            size="xl"
            variant="filled"
            loading={loading}>
            <IconX size="1rem" />
          </ActionIcon>
          <ActionIcon
            onClick={submitQuery}
            color="blue"
            size="xl"
            variant="filled"
            loading={loading}>
            <IconSend size="1rem" />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
}
