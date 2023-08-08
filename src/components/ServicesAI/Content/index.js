import {ActionIcon, Skeleton, Textarea, Card, Image, Text, Button, Center} from '@mantine/core';
import {IconSend} from '@tabler/icons-react';
import React, {useEffect, useRef, useState} from 'react';
import {v4} from 'uuid';
import ResponseCard from '../ResponseCard';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Content() {
  const textBoxRef = useRef(null);
  const [apiResponse, setApiResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uniqueID, setUniqueID] = useState();
  const [showExamplePrompt, setShowExamplePrompt] = useState(true);

  const examplePrompts = [
    'How do I delete a source via API?',
    'What is the api for creating an account on a source?',
    'Where can I find information on scopes?',
    'How do I create a personal access token?'
  ]

  useEffect(() => {
    let temp = localStorage.getItem('uniqueToken');
    if (!temp) {
      temp = v4();
      console.debug({generated: temp});
    } else {
      console.debug({localStorage: temp});
    }
    localStorage.setItem('uniqueToken', temp);
    setUniqueID(temp);
  }, []);

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

  const postQuery = async (query, token) => {
    const resp = await fetch(
      'https://sailpoint-ai-a67a0914ff13.herokuapp.com/chatbot',
      {
        method: 'POST',
        body: JSON.stringify({
          query,
          token: token,
        }),
      },
    );
    console.debug(resp);
    const json = await resp.json();
    console.debug(json);

    return await json.chat_history.map((item) => ({
      question: item[0],
      answer: item[1],
    }));
  };

  const submitQuery = async (e) => {
    if (
      e == null ||
      (e.keyCode === 13 &&
        e.shiftKey === false &&
        textBoxRef.current.value.trim() !== '') ||
      e.type === 'click'
    ) {
      if (e != null) e.preventDefault();
      setShowExamplePrompt(false);
      setLoading(true);
      const currentQuery = textBoxRef.current.value;
      textBoxRef.current.value = '';
      console.log({uniqueID});
      const json = await postQuery(currentQuery, uniqueID);
      setApiResponse(json);
      setLoading(false);
    }
  };

  const submitExample = async (question) => {
    textBoxRef.current.value = question
    submitQuery()
  }

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
        {apiResponse?.length > 0 &&
          apiResponse?.map((item, index) => (
            <ResponseCard Item={item} key={index} />
          ))}
        {loading && <Skeleton height={150} visible={loading} />}
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: '250px',
          width: '100vw',
          display: showExamplePrompt ? '' : 'none'
        }}>
        <div
          style={{
            margin: '0 auto',
            width: '500px',
          }}>
          <Card shadow="sm" padding="lg" radius="md" width={300} withBorder>
            <Card.Section>
              <Center h={80} mx="auto">
                <Image width={50} height={50} src={useBaseUrl('/icons/sun-bright-light.svg')}/>
              </Center>
              <Center h={60}>
                <Text fz="xl" fw={500}>Examples</Text>
              </Center>
            </Card.Section>

            {examplePrompts.map(eg => 
              <Button variant="light" color="blue" fullWidth mt="lg" radius="md" key={eg} onClick={() => submitExample(eg)}>
                {eg}
              </Button>
            )}

            <Card.Section mt="lg" h={50}>
              <Center><Text>Or craft your own query from the textbox blow</Text></Center>
            </Card.Section>
          </Card>
        </div>
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
