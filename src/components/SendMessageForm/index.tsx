import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';

import { api } from '../../services/api';

import { styles } from './styles';

import { COLORS } from '../../theme';

import { Button } from '../Button';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post('messages', { message: messageFormatted });

      setMessage('');

      Keyboard.dismiss();

      setSendingMessage(false);

      Alert.alert('Message sent successfully!');
    } else {
      Alert.alert('Enter a message to send!');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="What do you expect of #DoWhile2021?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />
      <Button
        title="Send message"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}
