import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';

import { Message, MessageProps } from '../Message';

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function loadMessages() {
      const lastMessages = await api.get<MessageProps[]>('messages/last');

      setCurrentMessages(lastMessages.data);
    }

    loadMessages();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
