const lowercase: string = 'abcdefghijklmnopqrstvwxyz';
const uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers: string = '0123456789';
const specials: string = '!§$%&=?^';
const seperators: string[] = ['-', '.', '+', '#', '|', '/'];

export class GeneratorService {

    count: number = 14;
    tupel: number = 4;
    letters: string = '';
    seperator: string = seperators[0];
    password: string = '';
    valid: boolean = true;
    lc: boolean = false;
    uc: boolean = false;
    nu: boolean = true;
    sp: boolean = false;

    constructor() {
        this.generate()
3}

    generate(): void {
        this.password = '';
        if (this.letters === ''){
            // this.setLowercase();
            this.setNumbers();
        }
        this.letters = this.letters.split('').sort(function () { return 0.5 - Math.random() }).join('');

        for (let i = 0; i < this.count; i = this.password.length) {
            if (i + this.tupel <= this.count) {
                for (let ii = 0; ii < this.tupel; ii++) {
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
            if (this.password.length + this.tupel < this.count) {
                this.password += this.seperator;
            } else {
                for (let iii = 0; iii < (this.count - this.password.length);iii++){
                    this.password += this.letters[Math.floor(Math.random() * this.letters.length)];
                }
            }
        }
    }

    getPassword(): string {
        let allmatched: number = 0;
        while (allmatched < 4){
            this.generate();
            if (this.lc){
                allmatched = this.anythingInCommon(this.password, lowercase) ? allmatched +1 : allmatched;
            } else allmatched++;

            if (this.uc){
                allmatched = this.anythingInCommon(this.password, uppercase)  ? allmatched +1 : allmatched;
            } else allmatched++;
            if (this.nu){
                allmatched = this.anythingInCommon(this.password, numbers)  ? allmatched +1 : allmatched;
            } else allmatched++;
            if (this.sp){
                allmatched = this.anythingInCommon(this.password, specials) ? allmatched +1 : allmatched;
            } else allmatched++;

        }
        return this.password;
    }

    getValid(): boolean {
        return this.valid;
    }

    setCount(value: number): void {
        this.count = value;
    }

    setTupel(value: number): void {
        this.tupel = value;
    }

    setSeperator(value: number): void {
        if (value > 0) {
            this.seperator = seperators[value];
        } else {
            this.seperator = '';
        }
    }

    setLowercase(): void {
            this.letters += lowercase;
            this.lc = true;
    }

    setUppercase(): void {
        this.letters += uppercase;
        this.uc = true;
    }

    setNumbers(): void {
        this.letters += numbers;
        this.nu = true;
    }

    setSpecials(): void {
        this.letters += specials;
        this.sp = true;
    }
    setPin(): void {
        // this.count = 4;
        this.seperator = '';
        this.letters = numbers;
        this.lc = false;
        this.uc = false;
        this.nu = true;
        this.sp = false;
    }
    setRepeat(value: number): void {
        this.count = value;
    }
    
    anythingInCommon(a: string, b: string): boolean {
        if (b.length < a.length)
            return this.anythingInCommon(b, a)

        for (var i = 0, len = a.length; i < len; i++)
            if (b.indexOf(a[i]) != -1)
                return true;

        return false
    }
    
    copyMessage(val: string) {
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
