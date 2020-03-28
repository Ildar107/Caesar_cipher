class CaesarCipher {
    constructor(){
        this.code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.pattern =  /[a-zA-Z]/;
    }

    generateSeq(num) {
        let index = num >= this.code.length ? num % this.code.length: num;
        if(index === 0) return this.code;
        return this.code.slice(index).concat(this.code.slice(0, index));
    }

    encode(str, num) {
        const result = [];
        const newSeq = this.generateSeq(num);
        for(let i = 0; i < str.length; i++) {
            if(this.pattern.test(str[i])) {
                let letter = newSeq[this.code.findIndex( x => x === str[i].toUpperCase())];
                if(str[i] === str[i].toUpperCase())
                    result.push(letter);
                else 
                    result.push(letter.toLocaleLowerCase());
            } else {
                result.push(str[i]);
            }
        }
        return result.join('');
    }

    decode(str, num) {
        const result = [];
        const newSeq = this.generateSeq(num);
        for(let i = 0; i < str.length; i++) {
            if(this.pattern.test(str[i])) {
                let letter = this.code[newSeq.findIndex(x => x === str[i].toUpperCase())];
                if(str[i] === str[i].toUpperCase())
                    result.push(letter);
                else
                    result.push(letter.toLocaleLowerCase());
            } else {
                result.push(str[i]);
            }
        }
        return result.join('');
    }
}

module.exports = new CaesarCipher();