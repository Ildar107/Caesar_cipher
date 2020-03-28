const fs = require('fs');

module.exports = (path) => {
    if(path === '') {
        return process.stdout;
    } else {
        if(!fs.existsSync(path)) {
            process.stderr.write('file does not exist');
            process.exit(1);
        }
        return fs.createWriteStream(path,{flags: 'a'});
    }
}