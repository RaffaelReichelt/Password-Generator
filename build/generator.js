"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorService = void 0;
const lowercase = 'abcdefghijklmnopqrstvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specials = '!§$%&=?^';
const seperators = ['-', '.', '+', '#', '|', '/'];
class GeneratorService {
    constructor() {
        this.count = 14;
        this.tupel = 4;
        this.letters = '';
        this.seperator = seperators[0];
        this.password = '';
        this.valid = true;
        this.lc = false;
        this.uc = false;
        this.nu = true;
        this.sp = false;
        this.generate();
        3;
    }
    generate() {
        this.password = '';
        if (this.letters === '') {
            // this.setLowercase();
            this.setNumbers();
        }
        this.letters = this.letters.split('').sort(function () { return 0.5 - Math.random(); }).join('');
        for (let i = 0; i < this.count; i = this.password.length) {
            if (i + this.tupel <= this.count) {
                for (let ii = 0; ii < this.tupel; ii++) {
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
            if (this.password.length + this.tupel < this.count) {
                this.password += this.seperator;
            }
            else {
                for (let iii = 0; iii < (this.count - this.password.length); iii++) {
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
        }
    }
    getPassword() {
        let allmatched = 0;
        while (allmatched < 4) {
            this.generate();
            if (this.lc) {
                allmatched = this.anythingInCommon(this.password, lowercase) ? allmatched + 1 : allmatched;
            }
            else
                allmatched++;
            if (this.uc) {
                allmatched = this.anythingInCommon(this.password, uppercase) ? allmatched + 1 : allmatched;
            }
            else
                allmatched++;
            if (this.nu) {
                allmatched = this.anythingInCommon(this.password, numbers) ? allmatched + 1 : allmatched;
            }
            else
                allmatched++;
            if (this.sp) {
                allmatched = this.anythingInCommon(this.password, specials) ? allmatched + 1 : allmatched;
            }
            else
                allmatched++;
        }
        return this.password;
    }
    getValid() {
        return this.valid;
    }
    setCount(value) {
        this.count = value;
    }
    setTupel(value) {
        this.tupel = value;
    }
    setSeperator(value) {
        if (value > 0) {
            this.seperator = seperators[value];
        }
        else {
            this.seperator = '';
        }
    }
    setLowercase() {
        this.letters += lowercase;
        this.lc = true;
    }
    setUppercase() {
        this.letters += uppercase;
        this.uc = true;
    }
    setNumbers() {
        this.letters += numbers;
        this.nu = true;
    }
    setSpecials() {
        this.letters += specials;
        this.sp = true;
    }
    setPin() {
        // this.count = 4;
        this.seperator = '';
        this.letters = numbers;
        this.lc = false;
        this.uc = false;
        this.nu = true;
        this.sp = false;
    }
    setRepeat(value) {
        this.count = value;
    }
    anythingInCommon(a, b) {
        if (b.length < a.length)
            return this.anythingInCommon(b, a);
        for (var i = 0, len = a.length; i < len; i++)
            if (b.indexOf(a[i]) != -1)
                return true;
        return false;
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
exports.GeneratorService = GeneratorService;
