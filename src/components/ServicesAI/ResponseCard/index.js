import {ActionIcon, Card, Textarea, Text, Transition} from '@mantine/core';
import {IconSend, IconX} from '@tabler/icons-react';
import React, {useRef, useState} from 'react';
import styles from './styles.module.css';

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
            <Text size="lg">{Item.question}</Text>
            <Text size="md" color="dimmed">
              {Item.answer}
            </Text>
          </Card>
        </div>
      )}
    </Transition>
  );
}
