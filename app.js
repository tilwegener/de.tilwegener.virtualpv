'use strict';

const Homey = require('homey');

module.exports = class VirtualPvApp extends Homey.App {
  async onInit() {
    this.homey.flow.getActionCard('set_production_power')
      .registerRunListener(({ device, value }) => device.setProductionPower(value));
    this.homey.flow.getActionCard('set_production_energy')
      .registerRunListener(({ device, value }) => device.setProductionEnergy(value));
  }
};
