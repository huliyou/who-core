/**
 * Happy Hacking
 * Created by leiyouwho on 1/5/2016.
 */

import { Platform } from 'react-native';

var OS;

if (window.document) {
  Platform.OS = 'web';
} else if (Platform.OS === 'ios') {
  Platform.OS = 'ios';
} else if (Platform.OS === 'android') {
  Platform.OS = 'android';
} else {
  OS = 'other'
}

export default {
  OS,
};
