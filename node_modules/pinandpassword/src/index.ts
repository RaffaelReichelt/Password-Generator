#!/usr/bin/env node

import { GeneratorService } from './generator';

import yargs = require('yargs');

interface Arguments {
  [z: string]: unknown;
  m: number|undefined;
  t: number|undefined;
  s: number|undefined;
  l: boolean;
  u: boolean;
  n: boolean;
  x: boolean;
  p: boolean;
  r:  number|undefined;
}

const arg: Arguments = yargs.options({
  m: {type: 'number', alias: 'max', describe: "Set password length"},
  t: {type: 'number', alias: 'tupel', describe: "Set group length"},
  s: {type: 'number', alias: 'seperator', describe: "set group seperator - 0 for none"},
  l: {type: 'boolean', alias: 'lowercase', default: true, describe: "Include lowercase letters"},
  u: {type: 'boolean', alias: 'uppercase', default: false, describe: "include upercase letters"},
  n: {type: 'boolean', alias: 'numbers', default: true, describe: "Include numbers"},
  x: {type: 'boolean', alias: 'specials', default: false, describe: "Include special letters"},
  p: {type: 'boolean', alias: 'pin', default: false, describe: "Generate a pin instead of a password"},
  r: {type: 'number', alias: 'repeat', describe: "Number of passwords/pins to generate"},
}).argv as Arguments;

  let pg = new GeneratorService();
  if (arg.m !== undefined)  {
    pg.setCount(arg.m);
  }
  if (arg.t != undefined) {
    pg.setTupel(arg.t)
  }

  if (arg.s !== undefined){
    pg.setSeperator(arg.s)
  }

  if (arg.l){
    pg.setLowercase()
  }
  
  if ( arg.u){
    pg.setUppercase()
  }
  if (arg.n){
    pg.setNumbers()
  }
  if (arg.x){
    pg.setSpecials()
  }
  if (arg.p){
    pg.setPin()
  }
  if (arg.r !== undefined){
    arg.r = arg.r > 0 ? arg.r : 1;
    for (let i = 0; i < arg.r; i++){
      pg.getPassword();
      process.stdout.write(pg.getValid() ? pg.getPassword() : 'adjust please …');
      process.stdout.write('\n');
    }
        
  }
  else {
    let password = pg.getPassword();
    process.stdout.write(pg.getValid() ? pg.getPassword() : 'adjust please …');
    process.stdout.write('\n');
  }
  