#!/usr/bin/env node

import * as fs from 'fs';

const file = process.argv[2];
if(!file) {
    console.log('No filename received');
    process.exit(1);
}

console.log(fs.readFileSync(file,'utf-8'));