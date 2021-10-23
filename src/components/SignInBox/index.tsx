import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

import { Button } from '../Button';
import { COLORS } from '../../theme';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Sign in with Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
