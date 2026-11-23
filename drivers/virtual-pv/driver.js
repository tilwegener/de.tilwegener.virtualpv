'use strict';

const { randomUUID } = require('node:crypto');
const Homey = require('homey');

module.exports = class VirtualPvDriver extends Homey.Driver {
  async onPairListDevices() {
    return [{
      name: this.homey.__('device_name'),
      data: { id: randomUUID() },
    }];
  }
};
