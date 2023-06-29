import Vue from 'vue';

Vue.filter('truncate', function(value, length) {
  if (!value) return '';
  if (value.length <= length) return value;
  return value.substring(0, length) + '..';
});
