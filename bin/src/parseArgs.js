const parseArgs = require('minimist');
const path = require('path');

const args = parseArgs(process.argv.slice(2), {alias: {'action': 'a', 'shift': 's', 'input': 'i', 'output': 'o'}});
const appArgs = {
    action: '',
    shift: 0,
    inputPath: '',
    outputPath: '',
}

if(!args.action) {
    console.error("Error: missed action arguments!\n");
    process.exit(1);
} else if(args.action !== undefined && (args.action !== 'encode' && args.action !== 'decode')) {
    console.error("Error: wrong action arguments!\n");
    process.exit(1);
}

if(!args.shift) {
    console.error("Error: missed shift arguments!\n");
    process.exit(1);
} else if(args.shift !== undefined && (isNaN(Number(args.shift)) || args.shift === true)) {
    console.error("Error: wrong shift arguments!\n");
    process.exit(1);
}

appArgs.action = args.action;
appArgs.shift = args.shift;

if(args.input) {
    appArgs.inputPath = path.resolve(__dirname, args.input);
}

if(args.output) {
    appArgs.outputPath = path.resolve(__dirname, args.output);
}

module.exports = appArgs;