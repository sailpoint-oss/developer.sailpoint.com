import {ActionIcon, Textarea, Text, Transition} from '@mantine/core';
import {IconSend, IconX} from '@tabler/icons-react';
import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import ResponseCard from '../ResponseCard';

export default function Content() {
  const [inputText, setInputText] = useState('');
  const [textareaheight, setTextAreaHeight] = useState(1);
  const [apiResponse, setApiResponse] = useState([]);
  const textBoxRef = useRef(null);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 400);

  const reset = async () => {
    setApiResponse([]);
  };

  const submitQuery = async (e) => {
    if (e.keyCode === 13 || e.type === 'click') {
      // const resp = await fetch('http://127.0.0.1:5000/chatbot', {
      //   method: 'POST',
      //   body: {query: textBoxRef.current.value},
      // });
      // console.log(resp);
      setApiResponse([
        ...apiResponse,
        {
          answer:
            'The best way to access the SailPoint APIs is either by using the client credentials OAuth2 flow or a personal access token. The client credentials flow is recommended for authentication with client-side scripts or programs. If you need to access endpoints that require a user context, such as the /v3/access-requests endpoint, you will need to generate an access token using your personal access token credentials. For more information, you can refer to the API docs on the SailPoint developer portal.',
          chat_history: [
            [
              'What is the best way to access the SailPoint APIs',
              'The best way to access the SailPoint APIs is either by using the client credentials OAuth2 flow or a personal access token. The client credentials flow is recommended for authentication with client-side scripts or programs. If you need to access endpoints that require a user context, such as the /v3/access-requests endpoint, you will need to generate an access token using your personal access token credentials. For more information, you can refer to the API docs on the SailPoint developer portal.',
            ],
          ],
          question: 'What is the best way to access the SailPoint APIs',
        },
      ]);
    }
  };

  return (
    <>
      <div className={styles.outterContainer}>
        <div className={styles.innerContainer}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Textarea
              style={{fontFamily: 'poppins', flexGrow: 1, marginRight: '10px'}}
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
      </div>
      <div className={styles.outterContainer} style={{overflow: 'auto'}}>
        <div className={styles.innerContainer}>
          {apiResponse.length > 0 &&
            apiResponse.map((item) => <ResponseCard Item={item} />)}
        </div>
      </div>
    </>
  );
}
