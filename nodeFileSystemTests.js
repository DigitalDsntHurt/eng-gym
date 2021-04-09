const fs = require('fs').promises;

const filePath = '/Users/attack/Desktop/test.json';
fs.appendFile(filePath, 'gbye');
