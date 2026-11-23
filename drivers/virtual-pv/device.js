'use strict';

const Homey = require('homey');

function validateReading(value, homey) {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(homey.__('invalid_reading'));
  }
}

module.exports = class VirtualPvDevice extends Homey.Device {
  async onInit() {
    if (this.getCapabilityValue('measure_power') == null) {
      await this.setCapabilityValue('measure_power', 0);
    }
    if (this.getCapabilityValue('meter_power') == null) {
      await this.setCapabilityValue('meter_power', 0);
    }
  }

  async onSettings({ newSettings, changedKeys }) {
    if (changedKeys.includes('production_power')) {
      await this.updateReading('measure_power', newSettings.production_power);
    }
    if (changedKeys.includes('production_energy')) {
      await this.updateReading('meter_power', newSettings.production_energy);
    }
  }

  async setProductionPower(value) {
    await this.updateReading('measure_power', value);
    await this.setSettings({ production_power: value });
  }

  async setProductionEnergy(value) {
    await this.updateReading('meter_power', value);
    await this.setSettings({ production_energy: value });
  }

  async updateReading(capability, value) {
    validateReading(value, this.homey);
    await this.setCapabilityValue(capability, value);
  }
};
