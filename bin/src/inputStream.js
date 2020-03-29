const fs = require('fs');

module.exports = (path) => {
    if(path === '') {
        return process.stdin;
    } else {
        if(!fs.existsSync(path)) {
            console.error('file does not exist\n');
            process.exit(1);
        }
        try {
            fs.accessSync(path, fs.constants.R_OK);
        } catch (err) {
            console.error('no access!\n');
        }

        return fs.createReadStream(path);
    }
}