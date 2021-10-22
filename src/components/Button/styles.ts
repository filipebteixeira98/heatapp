import { StyleSheet } from 'react-native';

import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    textTransform: 'uppercase',
  },
  icon: {
    marginRight: 12,
  },
});
