import {ActionIcon, Textarea} from '@mantine/core';
import {IconSend, IconX} from '@tabler/icons-react';
import React, {useRef, useState} from 'react';
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
      // const json = await resp.json()
      const json = {
        answer:
          'SailPoint supports a variety of transform operations. Some of the options include the username generator and the static transform. For a comprehensive list and detailed information about each operation, you can refer to the SailPoint Developer Community documentation on transforms: [Operations | SailPoint Developer Community](https://developer.sailpoint.com/idn/docs/transforms/operations).',
        chat_history: [
          [
            'what is services ai',
            'I\'m sorry, but I don\'t have any information about a service called "Services AI." Can you provide more context or details about what you are referring to?',
          ],
          [
            'this is just a test',
            "I don't know the purpose of this test as the context provided does not specify.",
          ],
          [
            'this is another test',
            'The purpose of this test is not provided in the given context.',
          ],
          [
            'just another test',
            "I don't know the specific purpose of this test as there is no information provided.",
          ],
          [
            'Can you give me a few transform operations supported by sailpoint?',
            'SailPoint supports various transform operations, including but not limited to:\n- Concatenation: Joining two or more values together.\n- Substring: Extracting a portion of a string based on specified starting and ending positions.\n- Regular expressions: Pattern matching and replacement.\n- Date functions: Manipulating and formatting date values.\n- Mathematical operations: Performing calculations on numeric values.\n- Case functions: Changing the case of a string (e.g., upper, lower, title case).\n- Data type conversion: Converting values from one data type to another.\nPlease note that this is not an exhaustive list, and there may be additional transform operations supported by SailPoint.',
          ],
          [
            'can you repeat that answer please?',
            'SailPoint supports a variety of transform operations. Some of the options include the username generator and the static transform. For a comprehensive list and detailed information about each operation, you can refer to the SailPoint Developer Community documentation on transforms: [Operations | SailPoint Developer Community](https://developer.sailpoint.com/idn/docs/transforms/operations).',
          ],
        ],
        question: 'can you repeat that answer please?',
      };
      setApiResponse(
        json.chat_history.map((item) => ({question: item[0], answer: item[1]})),
      );
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
          apiResponse.map((item) => <ResponseCard Item={item} />)}
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
