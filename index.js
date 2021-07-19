const Application = require('@waline/vercel');

module.exports = Application({
  secureDomains: 'njzjz.win',
  forbiddenWords: [
    '习近平',
    '毛泽东'
  ],
  async preSave(comment) {
    return { errmsg: 'Comment service is mantained.' };
  },
});
