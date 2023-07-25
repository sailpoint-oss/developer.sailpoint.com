import {Card, Text, Transition} from '@mantine/core';
import React, {useState} from 'react';
import {ReactMarkdown} from 'react-markdown/lib/react-markdown';

export default function ResponseCard({Item}) {
  const [mounted, setMounted] = useState(false);

  setTimeout(() => {
    setMounted(true);
  }, 10);

  return (
    <Transition
      mounted={mounted}
      transition="slide-down"
      duration={400}
      timingFunction="ease">
      {(styles) => (
        <div style={styles}>
          <Card shadow="sm" padding="md" radius="md" withBorder>
            <Text size="xl" fw={700} style={{paddingBottom: '20px'}}>
              {Item.question}
            </Text>
            <ReactMarkdown>{Item.answer}</ReactMarkdown>
          </Card>
        </div>
      )}
    </Transition>
  );
}
