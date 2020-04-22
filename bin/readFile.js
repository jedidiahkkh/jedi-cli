#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const file = process.argv[2];
if (!file) {
    console.log('No filename received');
    process.exit(1);
}
console.log(fs.readFileSync(file, 'utf-8'));
