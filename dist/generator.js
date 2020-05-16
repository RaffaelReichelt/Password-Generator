"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lowercase = 'abcdefghijklmnopqrstvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specials = '!§$%&=?^';
var seperators = ['-', '.', '+', '#', '|', '/'];
var GeneratorService = /** @class */ (function () {
    function GeneratorService() {
        this.count = 14;
        this.tupel = 4;
        this.letters = '';
        this.seperator = seperators[0];
        this.password = '';
        this.valid = true;
        this.lc = true;
        this.uc = false;
        this.nu = true;
        this.sp = false;
        this.generate();
        3;
    }
    GeneratorService.prototype.generate = function () {
        this.password = '';
        if (this.letters === '') {
            this.setLowercase();
            this.setNumbers();
        }
        this.letters = this.letters.split('').sort(function () { return 0.5 - Math.random(); }).join('');
        for (var i = 0; i < this.count; i = this.password.length) {
            if (i + this.tupel <= this.count) {
                for (var ii = 0; ii < this.tupel; ii++) {
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
            if (this.password.length + this.tupel < this.count) {
                this.password += this.seperator;
            }
            else {
                for (var iii = 0; iii < (this.count - this.password.length); iii++) {
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
        }
    };
    GeneratorService.prototype.getPassword = function () {
        var allmatched = 0;
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
    };
    GeneratorService.prototype.getValid = function () {
        return this.valid;
    };
    GeneratorService.prototype.setCount = function (value) {
        this.count = value;
    };
    GeneratorService.prototype.setTupel = function (value) {
        this.tupel = value;
    };
    GeneratorService.prototype.setSeperator = function (value) {
        if (value > 0) {
            this.seperator = seperators[value];
        }
        else {
            this.seperator = '';
        }
    };
    GeneratorService.prototype.setLowercase = function () {
        this.letters += lowercase;
        this.lc = true;
    };
    GeneratorService.prototype.setUppercase = function () {
        this.letters += uppercase;
        this.uc = true;
    };
    GeneratorService.prototype.setNumbers = function () {
        this.letters += numbers;
        this.nu = true;
    };
    GeneratorService.prototype.setSpecials = function () {
        this.letters += specials;
        this.sp = true;
    };
    GeneratorService.prototype.anythingInCommon = function (a, b) {
        if (b.length < a.length)
            return this.anythingInCommon(b, a);
        for (var i = 0, len = a.length; i < len; i++)
            if (b.indexOf(a[i]) != -1)
                return true;
        return false;
    };
    GeneratorService.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
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
    };
    return GeneratorService;
}());
exports.GeneratorService = GeneratorService;
//# sourceMappingURL=generator.js.map