import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

import { Message } from '../Message';

export function MessageList() {
  const message = {
    id: 'fasdiof89ya9fds',
    text: 'Lorem ipsum temet at sim',
    user: {
      name: 'Filipe Teixeira',
      avatar_url: 'https://github.com/filipebteixeira98.png',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
