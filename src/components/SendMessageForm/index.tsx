import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

import { COLORS } from '../../theme';

import { Button } from '../Button';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

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
      />
    </View>
  );
}
