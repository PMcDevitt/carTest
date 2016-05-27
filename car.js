'use strict'

class Car {
    constructor() {
      this.fuel = 0
      this.odometer = 0
      this.serviceDue = false
    }

    addFuel(fuel) {
      this.fuel += fuel
    }

    driveCar(distance) {
      var canTravel = this.fuel * 4
      var willTravel = canTravel - distance >= 0 ? distance : canTravel
      this.odometer += willTravel

      var fuelNeeded = distance / 4
      var fuelDifference = this.fuel - fuelNeeded
      this.fuel = fuelDifference >= 0 ? this.fuel - fuelNeeded : 0

      this.serviceDue = true
    }

    isServiceDue() {
      return this.serviceDue
    }

    carryoutService() {
      this.serviceDue = false
    }

}

module.exports = Car
