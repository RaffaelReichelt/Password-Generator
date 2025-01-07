#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var yargs = require("yargs");
var arg = yargs.options({
    m: { type: 'number', alias: 'max', describe: "Set password length" },
    t: { type: 'number', alias: 'tupel', describe: "Set group length" },
    s: { type: 'number', alias: 'seperator', describe: "set group seperator - 0 for none" },
    l: { type: 'boolean', alias: 'lowercase', default: true, describe: "Include lowercase letters" },
    u: { type: 'boolean', alias: 'uppercase', default: false, describe: "include upercase letters" },
    n: { type: 'boolean', alias: 'numbers', default: true, describe: "Include numbers" },
    x: { type: 'boolean', alias: 'specials', default: false, describe: "Include special letters" }
}).argv;
var pg = new generator_1.GeneratorService();
if (arg.m !== undefined) {
    pg.setCount(arg.m);
}
if (arg.t != undefined) {
    pg.setTupel(arg.t);
}
if (arg.s !== undefined) {
    pg.setSeperator(arg.s);
}
if (arg.l) {
    pg.setLowercase();
}
if (arg.u) {
    pg.setUppercase();
}
if (arg.n) {
    pg.setNumbers();
}
if (arg.x) {
    pg.setSpecials();
}
var password = pg.getPassword();
if (pg.getValid()) {
    console.log(password);
    //process.stdout.write(password);
}
else {
    console.log('adjust please …');
}
