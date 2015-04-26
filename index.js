var Promise = require('promise');
var request = require('superagent');

module.exports = function(urls) {
  var urls = arguments.length > 1 ?
    Array.prototype.slice.call(arguments, 0) :
    (typeof arguments[0] === 'string' ? [arguments[0]] : arguments[0]);

  return Promise.all(urls.map(function(url) {
    return new Promise(function(resolve, reject) {
      request.get(url, function(err, res) {
        if(err) reject(err);
        else resolve(res);
      });
    });
  }));
};