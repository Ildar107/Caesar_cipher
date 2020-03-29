const args = require('./src/parseArgs');
const inputStream = require('./src/inputStream')(args.inputPath);
const outputStream = require('./src/outputStream')(args.outputPath);
const transformStream = require('./src/textTransformStream')(args.action, args.shift);
const util = require('util');
const stream = require('stream');
const pipeline = util.promisify(stream.pipeline);

pipeline(
		inputStream,
		transformStream,
		outputStream
).catch(console.error);
