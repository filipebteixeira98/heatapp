import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sign out</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/filipebteixeira98.png" />
      </View>
    </View>
  );
}
