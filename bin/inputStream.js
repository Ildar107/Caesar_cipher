const fs = require('fs');

module.exports = (path) => {
    if(path === '') {
        return process.stdin;
    } else {
        if(!fs.existsSync(path)) {
            process.stderr.write('file does not exist');
            process.exit(1);
        }
        try {
            fs.accessSync(path, fs.constants.R_OK);
        } catch (err) {
            process.stderr.write('no access!');
        }

        return fs.createReadStream(path);
    }
}