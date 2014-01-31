#!/usr/bin/env node

var kaomoji = require('./');
var args = process.argv.splice(2);

if (Object.keys(kaomoji).indexOf(args[0]) == -1) {
  process.stdout.write('Invalid kaomoji type. Valid types are: \n');
  Object.keys(kaomoji).forEach(function(type) {
    process.stdout.write('- ' + type + '\n');
  });
  return;
}


if (args.indexOf('-a') !== -1 || args.indexOf('--all') !== -1) {
  kaomoji[args[0]].all.forEach(function(face) {
    process.stdout.write(face + '\n');
  });

  return;
}

process.stdout.write(kaomoji[args[0]]() + '\n');
