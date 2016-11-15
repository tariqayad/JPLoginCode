/* */ 
sha256 = require('../src/sha256').sha256;
sha224 = require('../src/sha256').sha224;
expect = require('expect.js');
require('./test');
delete require.cache[require.resolve('../src/sha256.js')];
delete require.cache[require.resolve('./test.js')];
sha256 = null;
sha224 = null;
JS_SHA256_TEST = true;
require('../src/sha256');
require('./test');
