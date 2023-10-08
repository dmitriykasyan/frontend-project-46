#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../module.js'; // '@hexlet/code' module.js - null function

import diff from '../src/index.js';

// const diff = genDiff(); // filepath1, filepath2
// console.log(diff);

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .argument('filepath1', 'path to first file')
  .argument('filepath2', 'path to second file')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    // console.log(diff(filepath1, filepath2));
    console.log('---\nresult: \n', diff(filepath1, filepath2));
  });

// program.parse();
program.parse(process.argv);
