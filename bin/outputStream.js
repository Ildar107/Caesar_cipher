const fs = require('fs');

module.exports = (path) => {
    if(path === '') {
        return process.stdout;
    } else {
        if(!fs.existsSync(path)) {
            process.stderr.write('file does not exist\n');
            process.exit(1);
        }
        try {
            fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
        } catch (err) {
            process.stderr.write('no access!\n');
        }
        return fs.createWriteStream(path,{flags: 'a'});
    }
}