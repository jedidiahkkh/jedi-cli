#!/usr/bin/env node

import * as yargs from 'yargs';
import * as fs from 'fs';

yargs.command('read <filename>', 'read the contents of a file', yargs => {
    yargs.positional('filename', {
        type: 'string',
        desc: 'the file to be read',
        demandOption: 'no file to read was provided'
    })
}, (args) => {
    try {
        console.log(fs.readFileSync(args.filename as string, 'utf-8'));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}).command('console', 'echo what was received', {}, args => {
    console.log('Output something first');
    console.log('Test output:' + (args[2] ?? '<nothing received>'));
});