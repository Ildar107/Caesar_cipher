const caeserChiper = require('./caeserChiper');
const { Transform } = require('stream');

class TextTransform extends Transform {
    constructor(options, action, shift) {
        super(options);
        this.action = action;
        this.shift = shift;
    }
    _transform(chunk, encoding, callback) {
      try {
        let result = '';
        if(this.action === 'encode')
            result = caeserChiper.encode(chunk.toString('utf8'), this.shift);
        else
            result = caeserChiper.decode(chunk.toString('utf8'), this.shift);
            callback(null, result);
      } catch (err) {
        callback(err);
      }
    }
}
  
module.exports = (action, shift) => new TextTransform({ highWaterMark: 2 }, action, shift);