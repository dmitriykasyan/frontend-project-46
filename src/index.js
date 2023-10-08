import _ from 'lodash';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const diff = (f1, f2) => {
  const dataOfFile1 = JSON.parse(readFileSync(f1, 'utf-8')); // path.resolve()
  const dataOfFile2 = JSON.parse(readFileSync(f2, 'utf-8'));
  console.log(dataOfFile1);
  console.log(dataOfFile2);
  const keys = _.sortBy(_.union(Object.keys(dataOfFile1), Object.keys(dataOfFile2)));
  const result = ['{'];
  // console.log('2', keys);
  return keys;
};

export default diff;

const file1 = process.argv[2];
// console.log(file1,'\n---');
const file2 = process.argv[3];
// console.log(file2,'\n---\n');

// console.log('11', diff(file1, file2)); //'file1.json', 'file2.json'
