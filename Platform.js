/**
 * Happy Hacking
 * Created by leiyouwho on 1/5/2016.
 */

var React = require('react-native');
var {
  Platfrom,
} = React;

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
