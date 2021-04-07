var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  totalCount = 0;

  getWordCount(filePathOne, (err, count) => {
    if (err) { throw err; }
    totalCount += count
    getWordCount(filePathTwo, (err, count) => {
      if (err) { throw err; }
      totalCount += count
      callback(null, totalCount);
    })
  })
};

module.exports = getTotalWordCount;
const fp1 = '/Users/attack/Eng/hrsprints/hr-sfo134-self-assessment-week-04-v7/async-word-count/files/fileOne.txt';
const fp2 = '/Users/attack/Eng/hrsprints/hr-sfo134-self-assessment-week-04-v7/async-word-count/files/fileTwo.txt';

getTotalWordCount(
  fp1, fp2, (err, tc) => {
    if (err) { throw err; }
    console.log(tc);
  }
)
