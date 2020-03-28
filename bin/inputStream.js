const fs = require('fs');

module.exports = (path) => {
    if(path === '') {
        return process.stdin;
    } else {
        if(!fs.existsSync(path)) {
            process.stderr.write('file does not exist');
            process.exit(1);
        }
        return fs.createReadStream(path);
    }
}