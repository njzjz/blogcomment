const Application = require('@waline/vercel');

module.exports = Application({
  secureDomains: 'njzjz.win',
  forbiddenWords: [
    '习近平',
    '毛泽东'
  ]
});
