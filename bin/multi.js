#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
const args = yargs.command('read <filename>', 'read the contents of a file', yargs => {
    yargs.positional('filename', {
        type: 'string',
        desc: 'the file to be read',
        demandOption: 'no file to read was provided'
    });
}, (args) => {
    try {
        console.log(fs.readFileSync(args.filename, 'utf-8'));
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
})
    .command('console [words..]', 'echo what was received', {}, args => {
    console.log(chalk.underline('Output something first'));
    console.log('Test output:' + args.words);
})
    .demandCommand(1, chalk.red('please specify a command'))
    .help()
    .argv;
// console.log(args);
