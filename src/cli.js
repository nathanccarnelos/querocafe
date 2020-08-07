#!/usr/bin/env node

const meow = require('meow');
const deliveryQueroCafe = require('./index');

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true) await deliveryQueroCafe();
};

const cliInterface = meow({});

cliMode(cliInterface);