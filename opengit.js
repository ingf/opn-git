#!/usr/bin/env node
'use strict';

const childProcess = require('child_process');
const opn = require('opn');

const remoteUrl = childProcess
  .execSync('git ls-remote --get-url')
  .toString()
  .trim();
const url =
  'https://' +
  remoteUrl
    .replace(
      /(git:\/\/)|(ssh:\/\/)|(https:\/\/)|(http:\/\/)|(git@)|(\.git)/g,
      ''
    )
    .replace(/:(\D)/, '/$1');

console.log(`open ${url}`);
opn(url);
process.exit();
