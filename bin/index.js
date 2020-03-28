#!/usr/bin/env node
const args = require('./parseArgs');
const inputStream = require('./inputStream')(args.inputPath);
const outputStream = require('./outputStream')(args.outputPath);
const transformStream = require('./textTransformStream')(args.action, args.shift);


inputStream.pipe(transformStream).pipe(outputStream);
